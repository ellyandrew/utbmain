export async function POST(req) {
  try {
    const { reference } = await req.json();

    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = await res.json();

    if (!data.status || data.data.status !== "success") {
      return Response.json({ success: false }, { status: 400 });
    }

    // ✅ Payment confirmed
    // Save donation to DB here if needed

    return Response.json({
      success: true,
      amount: data.data.amount / 100,
      email: data.data.customer.email,
      reference,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: "Verification failed" },
      { status: 500 }
    );
  }
}