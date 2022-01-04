$('#GetFile').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270252369_1515663488814797_825146315836990902_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=CUc7e3X-wjgAX8Ns1zv&tn=nEL04z9bu-ilrTWc&_nc_ht=scontent-tpe1-1.xx&oh=00_AT9nyCiX9-Zd2aU_vWUfDMCTiL_iBzCmeRiN2IFnV6stcg&oe=61D5822B',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile2').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270137468_1515663425481470_729827994506750145_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=JbPIlF8zs7gAX9_6UDj&_nc_ht=scontent-tpe1-1.xx&oh=00_AT9EoO-4kIuGL3dkCVeNzHV4If1YbpftA6woGttn8fqJ_g&oe=61D634CC',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile3').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/271156736_1515663445481468_1346365734300794720_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=C4WTvNEy7_YAX_TiUdZ&tn=nEL04z9bu-ilrTWc&_nc_ht=scontent-tpe1-1.xx&oh=00_AT-kDa9EOBYAPNRFYznG9Iab27zH4ZP6ISaliGcXXfG2Qg&oe=61D53CDA',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile4').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/271242861_1515663558814790_8779045798587120595_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=cBcvShyyy90AX_jmgwD&tn=nEL04z9bu-ilrTWc&_nc_ht=scontent-tpe1-1.xx&oh=00_AT9l_cMPtsSMRLoHZFfsOHq1sNG9EiGao63Dze_6mpADPg&oe=61D4FDCE',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile5').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270212566_1515663538814792_4046260332284214621_n.jpg?_nc_cat=109&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=nBHn3kKwfesAX_tf_Wh&_nc_ht=scontent-tpe1-1.xx&oh=00_AT_2wqdsFx2G6uAEn3c7PlpqXbX1273F01mKLEICidOGjw&oe=61D5362E',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile6').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270002461_1515663398814806_481715861326780403_n.jpg?_nc_cat=101&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=qmxf0XP8UEkAX-jzU2o&_nc_ht=scontent-tpe1-1.xx&oh=00_AT8brAf0P4UKuASOqfzcGLhUpJt44xAaUYYutXMHPr43Yw&oe=61D563C1',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile7').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/269964317_1515663565481456_7261268204898245216_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=fjKyLLL4IwgAX9oh9kG&_nc_ht=scontent-tpe1-1.xx&oh=00_AT9otT2k5b0VFrP6lcCJDhGheD7g_mZDYjxSt3LjoFYdog&oe=61D5B8CB',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile8').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270222271_1515663485481464_6135782258964759437_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=j0utHWbrmXEAX9ifGSl&_nc_ht=scontent-tpe1-1.xx&oh=00_AT_cSmVCzAvE0UXyG__FA6dPSfZrA9evwcv1R1tJeuSgXg&oe=61D5B996',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

$('#GetFile9').on('click', function () {
    $.ajax({
        url: 'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270145677_1515663638814782_114495200860174431_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=wEi-K62gjO8AX_TR8Om&_nc_oc=AQl411O-ZUeyahAVlWKBoveNBjlKj8sO7E9f20TBScT7nIbwbEKEmp7scaVZ_mSlqqQ&tn=nEL04z9bu-ilrTWc&_nc_ht=scontent-tpe1-1.xx&oh=00_AT9HIh6tFR8i9mBQyKZFiRpytm0Um1Pc0IGlRdb9Mit-qw&oe=61D510CD',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'myfile.jpg';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
    
});

