document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation();
        if (sidebar.style.right === "0px") {
            sidebar.style.right = "-250px";
        } else {
            sidebar.style.right = "0px";
        }
    });

    document.addEventListener("click", function(event) {
        if (!sidebar.contains(event.target) && event.target !== menuToggle) {
            sidebar.style.right = "-250px";
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
        const bloTableBody = document.getElementById("blo-table-body");
      
        const bloData = [
          { sno: 1, psName: "केंद्र क्र. 1", fullName: "राम जाधव", mobile: "9876543210" },
          { sno: 2, psName: "केंद्र क्र. 2", fullName: "सीमा पाटील", mobile: "9876543211" },
          { sno: 3, psName: "केंद्र क्र. 3", fullName: "अनिल शिंदे", mobile: "9876543212" }
          // Add more as required
        ];
      
        bloData.forEach(blo => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${blo.sno}</td>
            <td>${blo.psName}</td>
            <td>${blo.fullName}</td>
            <td>${blo.mobile}</td>
          `;
          bloTableBody.appendChild(row);
        });
      });
      
    // New Code Added
    console.log("Website Loaded Successfully");
});
