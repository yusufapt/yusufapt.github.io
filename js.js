// Fetch Nama Lengkap based on NIK
function getNamaByNIK(nik) {
  var sheet = SpreadsheetApp.openById('1zRyrNT10ZVb0yPanQh_AGsCODeD9CNVIM7fBhS0u-Tk');
  var dataSheet = sheet.getSheetByName('Data Karyawan');
  var data = dataSheet.getRange(2, 1, dataSheet.getLastRow() - 1, 2).getValues();
  var nikToNameMap = Object.fromEntries(data.map(row => [row[0], row[1]]));
  return nikToNameMap[nik] || "NIK tidak ditemukan";
}

// Function to handle form submission
function submitFormData(formData) {
  var sheet = SpreadsheetApp.openById('1zRyrNT10ZVb0yPanQh_AGsCODeD9CNVIM7fBhS0u-Tk');
  var dataSheet = sheet.getSheetByName('Data Karyawan');
  
  // Add data to the next row
  dataSheet.appendRow([
    formData.nik,
    formData.name,
    formData.ktp,
    formData.phone,
    formData.address,
    // Add other form fields here
  ]);
}
