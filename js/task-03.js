function getElementWidth(content, padding, border) {
    // const content1 = parseFloat(content);
    // const padding1 = parseFloat(padding);
    // const border1 = parseFloat(border);
    return (parseFloat(padding) + parseFloat(border)) * 2 + parseFloat(content);
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200