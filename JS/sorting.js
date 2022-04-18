function filterLessthan1000(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.price <= 1000) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}

function filterLessthan3000(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.price <= 3000) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}

function filterLessthan5000(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.price <= 5000) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}

function filterLessthan10000(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.price <= 10000) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}

document.querySelector('#filterInputP').addEventListener('change', function () {
    var sortType = document.querySelector('#filterInputP').value;
    if (sortType === 'none') {
        filterMore4(productData);
    } else if (sortType === 'less1000') {
        var data = filterLessthan1000(productData);
        displayAllProducts(data);
    } else if (sortType === 'less3000') {
        var data = filterLessthan3000(productData);
        displayAllProducts(data);
    } else if (sortType === 'less5000') {
        var data = filterLessthan5000(productData);
        displayAllProducts(data);
    } else if (sortType === 'less10000') {
        var data = filterLessthan10000(productData);
        displayAllProducts(data);
    }
});

function filterMore4(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.rating >= 4) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}
function filterMore3(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.rating >= 3) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}
function filterMore2(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.rating >= 2) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}
function filterMore1(productData) {
    var newData = productData.filter(function (prdoductItem) {
        if (prdoductItem.rating >= 1) {
            return true;
        } else {
            return false;
        }
    });
    return newData;
}

document.querySelector('#filterInputR').addEventListener('change', function () {
    var sortType = document.querySelector('#filterInputR').value;
    if (sortType === 'none') {
        displayAllProducts(productData);
    } else if (sortType === '4star') {
        var data = filterMore4(productData);
        displayAllProducts(data);
    } else if (sortType === '3star') {
        var data = filterMore3(productData);
        displayAllProducts(data);
    } else if (sortType === '2star') {
        var data = filterMore2(productData);
        displayAllProducts(data);
    } else if (sortType === '1star') {
        var data = filterMore1(productData);
        displayAllProducts(data);
    }
});