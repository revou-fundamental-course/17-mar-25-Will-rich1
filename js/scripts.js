function hitungLuasPersegi(sisi) {
  return sisi * sisi;
}

function hitungKelilingPersegi(sisi) {
  return 4 * sisi;
}

function hitungLuasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

function hitungKelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("button-calculate-luas")
    .addEventListener("click", function () {
      let sisi = parseFloat(document.getElementById("input-sisi-luas").value);
      if (!isNaN(sisi)) {
        document.getElementById("hasil-luas").textContent =
          hitungLuasPersegi(sisi);
        document.getElementById(
          "rumus-luas"
        ).textContent = `L = ${sisi} x ${sisi} = ${hitungLuasPersegi(sisi)}`;
      } else {
        alert("Masukkan nilai sisi yang valid");
      }
    });

  document
    .getElementById("button-calculate-keliling")
    .addEventListener("click", function () {
      let sisi = parseFloat(
        document.getElementById("input-sisi-keliling").value
      );
      if (!isNaN(sisi)) {
        document.getElementById("hasil-keliling").textContent =
          hitungKelilingPersegi(sisi);
        document.getElementById(
          "rumus-keliling"
        ).textContent = `K = 4 x ${sisi} = ${hitungKelilingPersegi(sisi)}`;
      } else {
        alert("Masukkan nilai sisi yang valid");
      }
    });

  document
    .getElementById("button-reset-luas")
    .addEventListener("click", function () {
      document.getElementById("input-sisi-luas").value = "";
      document.getElementById("hasil-luas").textContent = "";
      document.getElementById("rumus-luas").textContent = "";
    });

  document
    .getElementById("button-reset-keliling")
    .addEventListener("click", function () {
      document.getElementById("input-sisi-keliling").value = "";
      document.getElementById("hasil-keliling").textContent = "";
      document.getElementById("rumus-keliling").textContent = "";
    });

  document
    .getElementById("button-calculate-luas-pp")
    .addEventListener("click", function () {
      let panjang = parseFloat(
        document.getElementById("input-panjang-luas").value
      );
      let lebar = parseFloat(document.getElementById("input-lebar-luas").value);
      if (!isNaN(panjang) && !isNaN(lebar)) {
        document.getElementById("hasil-luas-pp").textContent =
          hitungLuasPersegiPanjang(panjang, lebar);
        document.getElementById(
          "rumus-luas-pp"
        ).textContent = `L = ${panjang} x ${lebar} = ${hitungLuasPersegiPanjang(
          panjang,
          lebar
        )}`;
      } else {
        alert("Masukkan nilai panjang dan lebar yang valid");
      }
    });

  document
    .getElementById("button-calculate-keliling-pp")
    .addEventListener("click", function () {
      let panjang = parseFloat(
        document.getElementById("input-panjang-keliling").value
      );
      let lebar = parseFloat(
        document.getElementById("input-lebar-keliling").value
      );
      if (!isNaN(panjang) && !isNaN(lebar)) {
        document.getElementById("hasil-keliling-pp").textContent =
          hitungKelilingPersegiPanjang(panjang, lebar);
        document.getElementById(
          "rumus-keliling-pp"
        ).textContent = `K = 2 x (${panjang} + ${lebar}) = ${hitungKelilingPersegiPanjang(
          panjang,
          lebar
        )}`;
      } else {
        alert("Masukkan nilai panjang dan lebar yang valid");
      }
    });

  document
    .getElementById("button-reset-luas-pp")
    .addEventListener("click", function () {
      document.getElementById("input-panjang-luas").value = "";
      document.getElementById("input-lebar-luas").value = "";
      document.getElementById("hasil-luas-pp").textContent = "";
      document.getElementById("rumus-luas-pp").textContent = "";
    });

  document
    .getElementById("button-reset-keliling-pp")
    .addEventListener("click", function () {
      document.getElementById("input-panjang-keliling").value = "";
      document.getElementById("input-lebar-keliling").value = "";
      document.getElementById("hasil-keliling-pp").textContent = "";
      document.getElementById("rumus-keliling-pp").textContent = "";
    });

  document.getElementById("nav-persegi").addEventListener("click", function () {
    document.getElementById("section-persegi").style.display = "block";
    document.getElementById("section-persegi-panjang").style.display = "none";
  });

  document
    .getElementById("nav-persegi-panjang")
    .addEventListener("click", function () {
      document.getElementById("section-persegi").style.display = "none";
      document.getElementById("section-persegi-panjang").style.display =
        "block";
    });

  // Set default tampilan ke persegi
  document.getElementById("section-persegi").style.display = "block";
  document.getElementById("section-persegi-panjang").style.display = "none";
});
