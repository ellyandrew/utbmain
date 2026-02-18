"use client";

import { useState, useEffect } from "react";
import { MapPin, Users, Home, User, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import LoadingScreen from "@/components/ui/LoadScreen";
import regionMap from "@/lib/regionMap";

export default function Insights() {
  const [filters, setFilters] = useState({ county: "", subCounty: "", ward: "" });

  const counties = Object.keys(regionMap);

  const subCounties =
    filters.county && regionMap[filters.county]
        ? Object.keys(regionMap[filters.county].subcounties)
        : [];

  const wards =
    filters.county &&
    filters.subCounty &&
    regionMap[filters.county]?.subcounties[filters.subCounty]
        ? Object.keys(
            regionMap[filters.county].subcounties[filters.subCounty].wards
        )
        : [];

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams(filters).toString();
        const res = await fetch(`/api/insights?${query}`);

        const json = await res.json();
        setRows(Array.isArray(json.data) ? json.data : []);

        setCurrentPage(1);
      } catch (err) {
        console.error("Error fetching insights:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters]);

  // Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  if (loading) return <LoadingScreen text="Loading Insights..." />;

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{ width: "100%", minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden", marginBottom: "3rem" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: `
            radial-gradient(circle at 25% 30%, rgba(229,85,60,0.45), transparent 60%),
            radial-gradient(circle at 75% 70%, rgba(229,85,60,0.25), transparent 50%),
            linear-gradient(180deg, rgba(0,0,0,0.6), rgba(255,255,255,0.1)),
            url('/illustrations/hero4.jpg')
          `, backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay, overlay, normal, normal", zIndex: 0, filter: "brightness(0.9) contrast(1.1)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", padding: "3rem 1.5rem" }}>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.2rem)", fontWeight: 700, marginBottom: "1rem" }}>Insights & Organization Data</h1>
          <p style={{ maxWidth: "700px", color: "#e6e6e6", lineHeight: 1.7, fontSize: "1.125rem" }}>
            Explore key metrics across counties, sub-counties, and wards: facilities, children under care, caregivers, and members.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem", maxWidth: "1200px", margin: "0 auto 2.5rem auto" }}>
        <select value={filters.county} onChange={(e) => setFilters({ ...filters, county: e.target.value, subCounty: "", ward: "", })} style={{ flex: 1, padding: "0.8rem 1rem", borderRadius: "0.75rem", border: "1px solid #ccc", fontSize: "1rem" }}>
          <option value="">- select county -</option>
                    {counties.map((county) => (
                <option key={county} value={county}>
                {county}
                </option>
            ))}
        </select>
        <select value={filters.subCounty} disabled={!filters.county} onChange={(e) => setFilters({ ...filters, subCounty: e.target.value, ward: "", })} style={{ backgroundColor: filters.county ? "#fff" : "#f3f3f3", cursor: filters.county ? "pointer" : "not-allowed", flex: 1, padding: "0.8rem 1rem", borderRadius: "0.75rem", border: "1px solid #ccc", fontSize: "1rem" }}>
          <option value="">- select sub-county -</option>
          {subCounties.map((sc) => (
                <option key={sc} value={sc}>
                {sc}
                </option>
            ))}
        </select>
        <select value={filters.ward} disabled={!filters.subCounty} onChange={(e) => setFilters({ ...filters, ward: e.target.value })} style={{ backgroundColor: filters.subCounty ? "#fff" : "#f3f3f3", cursor: filters.subCounty ? "pointer" : "not-allowed", flex: 1, padding: "0.8rem 1rem", borderRadius: "0.75rem", border: "1px solid #ccc", fontSize: "1rem" }}>
          <option value="">- select ward -</option>
          {wards.map((ward) => (
                <option key={ward} value={ward}>
                {ward}
                </option>
            ))}
        </select>
      </section>

      {/* KPI CARDS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "3rem", maxWidth: "1200px", margin: "0 auto 2.5rem auto" }}>
        <div style={{ padding: "1.5rem", borderRadius: "1rem", backgroundColor: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "1rem" }}>
          <Home size={40} color="#E5553C" />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#555", marginBottom: "0.5rem" }}>Facilities</h3>
            <p style={{ fontSize: "2rem", fontWeight: 700, color: "#E5553C" }}>{rows.reduce((sum, item) => sum + item.facilities, 0).toLocaleString()}</p>
          </div>
        </div>

        <div style={{ padding: "1.5rem", borderRadius: "1rem", backgroundColor: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "1rem" }}>
          <Heart size={40} color="#E5553C" />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#555", marginBottom: "0.5rem" }}>Children Under Care</h3>
            <p style={{ fontSize: "2rem", fontWeight: 700, color: "#E5553C" }}>{rows.reduce((sum, item) => sum + item.children, 0).toLocaleString()}</p>
          </div>
        </div>

        <div style={{ padding: "1.5rem", borderRadius: "1rem", backgroundColor: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "1rem" }}>
          <User size={40} color="#E5553C" />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#555", marginBottom: "0.5rem" }}>Caregivers</h3>
            <p style={{ fontSize: "2rem", fontWeight: 700, color: "#E5553C" }}>{rows.reduce((sum, item) => sum + item.caregivers, 0).toLocaleString()}</p>
          </div>
        </div>

        <div style={{ padding: "1.5rem", borderRadius: "1rem", backgroundColor: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "1rem" }}>
          <Users size={40} color="#E5553C" />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#555", marginBottom: "0.5rem" }}>Members</h3>
            <p style={{ fontSize: "2rem", fontWeight: 700, color: "#E5553C" }}>{rows.reduce((sum, item) => sum + item.members, 0).toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* TABLE */}
      <section style={{ overflowX: "auto", borderRadius: "1rem", backgroundColor: "#fff", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", padding: "1.5rem", maxWidth: "1200px", margin: "0 auto 2.5rem auto" }}>
        {currentRows.length === 0 ? (
            <div
            style={{
            padding: "3rem",
            textAlign: "center",
            background: "#fff",
            borderRadius: "1rem",
            border: "1px dashed #ddd",
            color: "#555",
            }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            No data found
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#777" }}>
            Try adjusting the selected county, sub-county, or ward.
            </p>
        </div>
        ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #eee", textAlign: "left" }}>
              <th style={{ padding: "0.8rem 1rem", color: "#555" }}>County</th>
              <th style={{ padding: "0.8rem 1rem", color: "#555" }}>Sub-County</th>
              <th style={{ padding: "0.8rem 1rem", color: "#555" }}>Ward</th>
              <th style={{ padding: "0.8rem 1rem", color: "#555" }}>Facilities</th>
              <th style={{ padding: "0.8rem 1rem", color: "#555" }}>Children</th>
              <th style={{ padding: "0.8rem 1rem", color: "#555" }}>Caregivers</th>
              <th style={{ padding: "0.8rem 1rem", color: "#555" }}>Members</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: "0.8rem 1rem" }}>{item.county}</td>
                <td style={{ padding: "0.8rem 1rem" }}>{item.subCounty}</td>
                <td style={{ padding: "0.8rem 1rem" }}>{item.ward}</td>
                <td style={{ padding: "0.8rem 1rem" }}>{item.facilities}</td>
                <td style={{ padding: "0.8rem 1rem" }}>{item.children}</td>
                <td style={{ padding: "0.8rem 1rem" }}>{item.caregivers}</td>
                <td style={{ padding: "0.8rem 1rem" }}>{item.members}</td>
              </tr>
            ))}
          </tbody>
        </table>
        )}

        {/* PAGINATION */}
        <div style={{ display: "flex", justifyContent: "center", margin: "1.5rem 0", gap: "1rem" }}>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} style={{ padding: "0.5rem 1rem", backgroundColor: "#E5553C", color: "#fff", borderRadius: "0.5rem", border: "none", cursor: currentPage === 1 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <ChevronLeft size={16} /> Prev
          </button>
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>Page <strong>{currentPage}</strong> of {totalPages}</span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} style={{ padding: "0.5rem 1rem", backgroundColor: "#E5553C", color: "#fff", borderRadius: "0.5rem", border: "none", cursor: currentPage === totalPages ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            Next <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
