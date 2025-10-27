function calculate() {
    // <!-- <table>
    //         <tr>
    //             <th>เลขคูณ</th>
    //             <th>ผลลัพธ์</th>
    //         </tr>
    //         <tr>
    //             <td>10 x 1</td>
    //             <td>10</td>
    //         </tr>
    //         <tr>
    //             <td>10 x 2</td>
    //             <td>20</td>
    //         </tr>
    //         <tr>
    //             <td>10 x 3</td>
    //             <td>30</td>
    //         </tr>
    //         <tr>
    //             <td>10 x 4</td>
    //             <td>40</td>
    //         </tr>
    //         <tr>
    //             <td>10 x 5</td>
    //             <td>50</td>
    //         </tr>
    //         <tr>
    //             <td>10 x 6</td>
    //             <td>60</td>
    //         </tr>
    //         <tr>
    //             <td>10 x 7</td>
    //             <td>70</td>
    //         </tr>

    //     </table> -->
    // detele prevous table if exists
    const existingTable = document.querySelector('#math_table table');
    if (existingTable) {
        existingTable.remove();
    }
    const number = document.getElementById('inputNumber').value;
    if (number < 1 || number > 12) {
        alert("กรุณาใส่เลขระหว่าง 1 ถึง 12");
        return;
    }
    let table1 = document.createElement('table');
    let headrow = document.createElement('tr');
    let head1 = document.createElement('th');
    let head2 = document.createElement('th');
    let text1 = document.createTextNode('เลขคูณ');
    let text2 = document.createTextNode('ผลลัพธ์');
    head1.appendChild(text1);
    head2.appendChild(text2);
    headrow.appendChild(head1);
    headrow.appendChild(head2);
    table1.appendChild(headrow);
    document.getElementById('math_table').appendChild(table1);

    for (let i=1 ; i<=7 ; i++) {
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        let cell2 = document.createElement('td');
        let text1 = document.createTextNode(`${number} x ${i}`);
        let text2 = document.createTextNode(number * i);
        cell1.appendChild(text1);
        cell2.appendChild(text2);
        row.appendChild(cell1);
        row.appendChild(cell2);
        table1.appendChild(row);
    }

    // for (let i = 1; i <= 7; i++) {
    //     let row = document.createElement('tr');
    //     let cell1 = document.createElement('td');
    //     let cell2 = document.createElement('td');
    //     let textCell1 = document.createTextNode(`${number} x ${i}`);
    //     let textCell2 = document.createTextNode(number * i);
    //     cell1.appendChild(textCell1);
    //     cell2.appendChild(textCell2);
    //     row.appendChild(cell1);
    //     row.appendChild(cell2);
    //     table1.appendChild(row);
    // }
}