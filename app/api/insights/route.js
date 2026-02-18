import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const county = searchParams.get("county");
    const subCounty = searchParams.get("subCounty");
    const ward = searchParams.get("ward");

    // -------------------------
    // Fetch facilities
    // -------------------------
    const facilities = await prisma.facilities_tbl.findMany({
      where: {
        ...(county && { f_county: county }),
        ...(subCounty && { f_subcounty: subCounty }),
        ...(ward && { f_area: ward }),
      },
      select: {
        facility_id: true,
        facility_name: true,
        f_county: true,
        f_subcounty: true,
        f_area: true,
        total_beneficiaries: true,
        total_caregivers: true,
      },
    });

    // -------------------------
    // Fetch member profiles (location only)
    // -------------------------
    const memberProfiles = await prisma.member_profile_tbl.findMany({
      where: {
        ...(county && { county }),
        ...(subCounty && { sub_county: subCounty }),
        ...(ward && { ward }),
      },
      select: {
        member_id: true,
        county: true,
        sub_county: true,
        ward: true,
      },
    });

    // -------------------------
    // Aggregate results
    // -------------------------
    const resultMap = {};

    // Facilities aggregation
    facilities.forEach((f) => {
      const key = `${f.f_county || ""}-${f.f_subcounty || ""}-${f.f_area || ""}`;

      if (!resultMap[key]) {
        resultMap[key] = {
          county: f.f_county,
          subCounty: f.f_subcounty,
          ward: f.f_area,
          facilities: 0,
          children: 0,
          caregivers: 0,
          members: 0,
        };
      }

      resultMap[key].facilities += 1;
      resultMap[key].children += f.total_beneficiaries || 0;
      resultMap[key].caregivers += f.total_caregivers || 0;
    });

    // Members aggregation
    memberProfiles.forEach((p) => {
      const key = `${p.county || ""}-${p.sub_county || ""}-${p.ward || ""}`;

      if (!resultMap[key]) {
        resultMap[key] = {
          county: p.county,
          subCounty: p.sub_county,
          ward: p.ward,
          facilities: 0,
          children: 0,
          caregivers: 0,
          members: 0,
        };
      }

      resultMap[key].members += 1;
    });

    return NextResponse.json({
      data: Object.values(resultMap),
      totals: {
        facilities: facilities.length,
        members: memberProfiles.length,
      },
    });
  } catch (error) {
    console.error("INSIGHTS API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to load insights data" },
      { status: 500 }
    );
  }
}
