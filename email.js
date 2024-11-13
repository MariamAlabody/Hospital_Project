// التعامل مع إضافة بريد إلكتروني جديد
document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault(); // لمنع إرسال النموذج بشكل تقليدي

    // الحصول على القيم من النموذج
    var employeeName = document.getElementById("employee-name").value;
    var employeeEmail = document.getElementById("employee-email").value;

    // إضافة البريد الإلكتروني الجديد إلى جدول البريد الإلكتروني
    var table = document.getElementById("email-table").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.textContent = table.rows.length; // رقم الموظف
    cell2.textContent = employeeName; // اسم الموظف
    cell3.textContent = employeeEmail; // البريد الإلكتروني
    cell4.innerHTML = '<a href="#" onclick="editEmail(\'' + table.rows.length + '\')">تعديل</a> | <a href="#" onclick="deleteEmail(\'' + table.rows.length + '\')">حذف</a>'; // الروابط لتعديل أو حذف

    // مسح القيم في النموذج بعد الإضافة
    document.getElementById("employee-name").value = '';
    document.getElementById("employee-email").value = '';
});

// وظيفة لتعديل البريد الإلكتروني
function editEmail(rowNumber) {
    var table = document.getElementById("email-table").getElementsByTagName('tbody')[0];
    var row = table.rows[rowNumber - 1];
    
    document.getElementById("employee-name").value = row.cells[1].textContent;
    document.getElementById("employee-email").value = row.cells[2].textContent;

    // يمكن إضافة المزيد من المميزات مثل تحديث البيانات بعد التعديل
}

// وظيفة لحذف البريد الإلكتروني
function deleteEmail(rowNumber) {
    var table = document.getElementById("email-table").getElementsByTagName('tbody')[0];
    table.deleteRow(rowNumber - 1);
}
