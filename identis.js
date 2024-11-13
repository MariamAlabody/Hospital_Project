// التعامل مع إضافة هوية جديدة
document.getElementById("identity-form").addEventListener("submit", function(event) {
    event.preventDefault(); // لمنع إرسال النموذج بشكل تقليدي

    // الحصول على القيم من النموذج
    var identityName = document.getElementById("identity-name").value;
    var identityNumber = document.getElementById("identity-number").value;
    var issueDate = document.getElementById("identity-issue-date").value;
    var expiryDate = document.getElementById("identity-expiry-date").value;

    // إضافة الهوية الجديدة إلى جدول الهوية
    var table = document.getElementById("identity-table").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.textContent = table.rows.length; // رقم الهوية
    cell2.textContent = identityName; // اسم الشخص
    cell3.textContent = identityNumber; // رقم الهوية
    cell4.textContent = issueDate; // تاريخ الإصدار
    cell5.textContent = expiryDate; // تاريخ الانتهاء
    cell6.innerHTML = '<a href="#" onclick="editIdentity(\'' + table.rows.length + '\')">تعديل</a> | <a href="#" onclick="deleteIdentity(\'' + table.rows.length + '\')">حذف</a>'; // الروابط لتعديل أو حذف

    // مسح القيم في النموذج بعد الإضافة
    document.getElementById("identity-name").value = '';
    document.getElementById("identity-number").value = '';
    document.getElementById("identity-issue-date").value = '';
    document.getElementById("identity-expiry-date").value = '';
});

// وظيفة لتعديل الهوية
function editIdentity(rowNumber) {
    var table = document.getElementById("identity-table").getElementsByTagName('tbody')[0];
    var row = table.rows[rowNumber - 1];
    
    document.getElementById("identity-name").value = row.cells[1].textContent;
    document.getElementById("identity-number").value = row.cells[2].textContent;
    document.getElementById("identity-issue-date").value = row.cells[3].textContent;
    document.getElementById("identity-expiry-date").value = row.cells[4].textContent;

    // يمكن إضافة المزيد من المميزات مثل تحديث البيانات بعد التعديل
}

// وظيفة لحذف الهوية
function deleteIdentity(rowNumber) {
    var table = document.getElementById("identity-table").getElementsByTagName('tbody')[0];
    table.deleteRow(rowNumber - 1);
}
