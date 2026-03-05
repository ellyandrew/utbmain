import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const body = await req.text();

  const signature = req.headers.get("x-paystack-signature");
  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(body)
    .digest("hex");

  if (hash !== signature) {
    return new Response("Invalid signature", { status: 401 });
  }

  const event = JSON.parse(body);

//   On success
  if (event.event === "charge.success") {
    const data = event.data;

    await prisma.donation.upsert({
      where: { reference: data.reference },
      update: {
        status: "SUCCESS",
        paystackId: String(data.id),
        rawEvent: data,
      },
      create: {
        reference: data.reference,
        paystackId: String(data.id),
        email: data.customer.email,
        amount: data.amount / 100, // KES
        currency: data.currency,
        status: "SUCCESS",
        frequency:
          data.metadata?.custom_fields?.find(
            (f) => f.variable_name === "frequency"
          )?.value || "one-time",
        rawEvent: data,
      },
    });
  }

  return new Response("OK", { status: 200 });
}