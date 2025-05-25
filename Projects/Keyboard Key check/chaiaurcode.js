const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {

    insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                        <th>Key</th>
                        <th>KeyCode</th>
                        <th>Code</th>
                </tr>
                <tr>
                        <td>${e.key === " " ? "space" : e.key}</td>
                        <td>${event.keyCode}</td>
                        <td>${event.code}</td>
                </tr>

            </table>
        </div>
    `;
});
