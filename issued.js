// التعامل مع إضافة كتاب صادر جديد
document.getElementById("outgoing-book-form").addEventListener("submit", function(event) {
    event.preventDefault(); // لمنع إرسال النموذج بشكل تقليدي

    // الحصول على القيم من النموذج
    var bookTitle = document.getElementById("book-title").value;
    var sendDate = document.getElementById("send-date").value;
    var recipient = document.getElementById("recipient").value;
    var remarks = document.getElementById("remarks").value;

    // إضافة الكتاب الصادر الجديد إلى جدول الكتب الصادرة
    var table = document.getElementById("outgoing-book-table").getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.textContent = table.rows.length; // الرقم التسلسلي
    cell2.textContent = bookTitle; // عنوان الكتاب
    cell3.textContent = sendDate; // تاريخ الإرسال
    cell4.textContent = recipient; // المستلم
    cell5.textContent = remarks; // الملاحظات
    cell6.innerHTML = '<a href="#" onclick="editBook(\'' + table.rows.length + '\')">تعديل</a> | <a href="#" onclick="deleteBook(\'' + table.rows.length + '\')">حذف</a>'; // الروابط لتعديل أو حذف

    // مسح القيم في النموذج بعد الإضافة
    document.getElementById("book-title").value = '';
    document.getElementById("send-date").value = '';
    document.getElementById("recipient").value = '';
    document.getElementById("remarks").value = '';
});

// وظيفة لتعديل الكتاب الصادر
function editBook(rowNumber) {
    var table = document.getElementById("outgoing-book-table").getElementsByTagName('tbody')[0];
    var row = table.rows[rowNumber - 1];
    
    document.getElementById("book-title").value = row.cells[1].textContent;
    document.getElementById("send-date").value = row.cells[2].textContent;
    document.getElementById("recipient").value = row.cells[3].textContent;
    document.getElementById("remarks").value = row.cells[4].textContent;

    // يمكن إضافة المزيد من المميزات مثل تحديث البيانات بعد التعديل
}

// وظيفة لحذف الكتاب الصادر
function deleteBook(rowNumber) {
    var table = document.getElementById("outgoing-book-table").getElementsByTagName('tbody')[0];
    table.deleteRow(rowNumber - 1);
}
