/*document.addEventListener("DOMContentLoaded", function () {
  // ===== Sidebar Toggle Logic =====
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      sidebar.style.right = sidebar.style.right === "0px" ? "-250px" : "0px";
    });

    document.addEventListener("click", function (event) {
      if (!sidebar.contains(event.target) && event.target !== menuToggle) {
        sidebar.style.right = "-250px";
      }
    });
  }

  // ===== BLO Table Population Logic =====
  const bloData = [
    { sno: 1, ps: "PS-01", name: "सोनाली कदम", mobile: "9876543210" },
    { sno: 2, ps: "PS-02", name: "रमेश पाटील", mobile: "9876543211" },
    { sno: 3, ps: "PS-03", name: "सुरेश गावडे", mobile: "9876543212" },
    // Add the remaining entries here...
  ];

  const tableBody = document.querySelector("#blo-table tbody");

  if (tableBody) {
    bloData.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.sno}</td>
        <td>${entry.ps}</td>
        <td>${entry.name}</td>
        <td>${entry.mobile}</td>
      `;
      tableBody.appendChild(row);
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // ==== Sidebar Toggle ====
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-250px";
    } else {
      sidebar.style.right = "0px";
    }
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuToggle) {
      sidebar.style.right = "-250px";
    }
  });

  // ==== BLO Table Data ====
  const bloData = [
    { sno: 1, ps: "PS-01", name: "सोनाली कदम", mobile: "9876543210" },
    { sno: 2, ps: "PS-02", name: "रमेश पाटील", mobile: "9876543211" },
    { sno: 3, ps: "PS-03", name: "सुरेश गावडे", mobile: "9876543212" },
    // Add more rows as needed
  ];

  const tableBody = document.querySelector("#blo-table tbody");

  if (tableBody) {
    bloData.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.sno}</td>
        <td>${entry.ps}</td>
        <td>${entry.name}</td>
        <td>${entry.mobile}</td>
      `;
      tableBody.appendChild(row);
    });
  }
});
*/
