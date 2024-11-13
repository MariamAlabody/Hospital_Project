function addRequest() {
    // الحصول على قيم المدخلات
    const requestNumber = document.getElementById('request-number').value;
    const requesterName = document.getElementById('requester-name').value;
    const requestDescription = document.getElementById('request-description').value;
    const requestDate = document.getElementById('request-date').value;

    // إضافة الطلب إلى الجدول
    const tableBody = document.getElementById('request-table-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${requestNumber}</td>
        <td>${requesterName}</td>
        <td>${requestDate}</td>
        <td>${requestDescription}</td>
        <td><button class="action-btn">تفاصيل</button></td>
    `;
    tableBody.appendChild(newRow);

    // إعادة تعيين الحقول
    document.getElementById('add-request-form').reset();

    // إعادة التوجيه إلى صفحة نجاح
    window.location.href = 'incoming-request-ssuccess.html';
}
