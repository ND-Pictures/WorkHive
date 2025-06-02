const plugin = require("plugin-vs-v2");

let SaveAPI = null;

var menuItems = new Array();
var htmlContextMenu;
var copyLabel;
var saveLabel;
var printLabel;

const copyCommand = () => {

    const selectedText = window.getSelection().toString();

    navigator.clipboard.writeText(selectedText).then(() => {
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
};

const saveCommand = () => {
    SaveAPI ??= plugin.JSONMarshaler.attachToMarshaledObject("SaveObject", {
        save: function (html) {
            return this._call("SaveHtmlContent", html);
        }

    }, true);

    var htmlContent = document.querySelector("html").innerHTML;
    SaveAPI.save(htmlContent);
};

const printCommand = () => {
    window.print();
};

// Uncomment access key and event listener when the Daytona Key down event can handle 2 keys being pressed
// Will verify that pressing the keys trigger the commands
// Bug 2175234 needs to be resolved first

/* document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key == "p") {
        printCommand();
    }

    if (event.ctrlKey && event.key == "s") {
        saveCommand();
    }

    if (event.ctrlKey && event.key == "c") {
        copyCommand();
    }
}); */

const createMenuItems = () => {
    return [
        {
            id: "Copy",
            callback: copyCommand,
            label: copyLabel,
            type: plugin.ContextMenu.MenuItemType.command,
            //accessKey: "Ctrl+C",
        },
        {
            id: "Save",
            callback: saveCommand,
            label: saveLabel,
            type: plugin.ContextMenu.MenuItemType.command,
            // accessKey: "Ctrl+S",
        },
        {
            id: "Print",
            callback: printCommand,
            label: printLabel,
            type: plugin.ContextMenu.MenuItemType.command,
            // accessKey: "Ctrl+P",
        }
    ];
};

plugin.Messaging.addEventListener("pluginready", function () {
    copyLabel = plugin.Resources.getString("CopyMenuItem");
    saveLabel = plugin.Resources.getString("SaveAsHTMLMenuItem");
    printLabel = plugin.Resources.getString("PrintHTMLMenuItem");

    menuItems = createMenuItems();

    htmlContextMenu = plugin.ContextMenu.create(menuItems, null, null, null, null);
    htmlContextMenu.attach(document.getElementById("___markdown-content___"));
    return htmlContextMenu;
});
// SIG // Begin signature block
// SIG // MIIoQAYJKoZIhvcNAQcCoIIoMTCCKC0CAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // mowwAMySSdxfMYSOGR94Pd1yVkNOHNv4PkNqk6o7ttKg
// SIG // gg2LMIIGCTCCA/GgAwIBAgITMwAAA/S4xF3hTnC2fgAA
// SIG // AAAD9DANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTI0MDcxNzIxMDIzNVoX
// SIG // DTI1MDkxNTIxMDIzNVowgYgxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xMjAwBgNVBAMTKU1pY3Jvc29mdCAzcmQgUGFydHkg
// SIG // QXBwbGljYXRpb24gQ29tcG9uZW50MIIBIjANBgkqhkiG
// SIG // 9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr9z/Gy9PBiqJRVu0
// SIG // DQ1ThdGjOIqjMVbwFlTNduP/NsW4wK2iZCsYnjK0GtRX
// SIG // PeS1RoMZiSIuUekCjM9jDvW58Au5EpD6qGSYpdum0S2O
// SIG // o4p428D6St0821u8/W131sOWzxZbe9jVSHVyd8bR6GGv
// SIG // gDovvghdkcu/u6NQM76LScBupUEogjCnjLfGqahBdX/k
// SIG // JAxRFL+bXs8Pe+PA3h1vaK76OCD81mu71kIJYwdPCykp
// SIG // 80zffyaLdnKFqRb+GLhKCWZkdqHzyTJw1FK7gzkU158c
// SIG // IX73f8FJiEqBMrEqqG5DVfqhblJkkoWK8fEdcx5uz+hv
// SIG // 4kTCCmJkqyGASlL53QIDAQABo4IBczCCAW8wHwYDVR0l
// SIG // BBgwFgYKKwYBBAGCN0wRAQYIKwYBBQUHAwMwHQYDVR0O
// SIG // BBYEFA8+LjI0vGAkmWlNOOPRiWENbn8qMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzMTUyMis1MDI1MTgwHwYD
// SIG // VR0jBBgwFoAUSG5k5VAF04KqFzc3IrVtqMp1ApUwVAYD
// SIG // VR0fBE0wSzBJoEegRYZDaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tL3BraW9wcy9jcmwvTWljQ29kU2lnUENBMjAx
// SIG // MV8yMDExLTA3LTA4LmNybDBhBggrBgEFBQcBAQRVMFMw
// SIG // UQYIKwYBBQUHMAKGRWh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9wa2lvcHMvY2VydHMvTWljQ29kU2lnUENBMjAx
// SIG // MV8yMDExLTA3LTA4LmNydDAMBgNVHRMBAf8EAjAAMA0G
// SIG // CSqGSIb3DQEBCwUAA4ICAQAVAgIhJ+IPIuU91Qj/NetC
// SIG // GOBEXb2YuUGdqUpwT1tXbMFYS8ZDU4gk1Vyg400OBMAw
// SIG // TUmWRiXj8+PrfOqSoZQTjd0u8LMH+XwqLyS5SIim8PhO
// SIG // E2XmOsQMXfuc1e0NpbEITx8YjmNDyBlBNCiX7/w0FLpQ
// SIG // /A6xNK67u8jjvgySNJrqCtAWx4UX3ZgCYadoG2EZGqxC
// SIG // JITC/Zt4EddpggW+vVaHJuCMjgYr1DzI470DJBERe3Ed
// SIG // O5Nrj+nZqUfMLaH/ZWtPytMIIj+V7kFLAKoM4V65Yx+3
// SIG // Su56hqwQ4yba0XWH71S/kXM/YmGTtvNINrjbWnOXptxz
// SIG // hLGnLQC+1yqmeKO7PbEcqf20zSy0ZoRTAe9vSC/h4tGD
// SIG // OwvLYdx2eZz/u+y+OilBoqekIESCbPhDtGDVvgMIDMT3
// SIG // yqU8fxoIfGfOZD+xyw2SZGXTzv93IFTkzuGsdtbztsjD
// SIG // wnX6Bhq9mS2cOEoxGxrjmSdtohjFe7Qbx5PJ1gLd6vo/
// SIG // 4nAKvfRgNZyD58N4ytyvTsBqsAPXolrDvP2xzJurOdFC
// SIG // iBbqTCpuqjm6LGlQckefK3/AsbppGu4T8tXkiUs0MgOF
// SIG // KmDU1rgobE36oES5i6JkusgLu7eK/2zOJhpftiovmr4U
// SIG // OAjpt41lndFelBiD90+M2ijbNhlhQSGLG/+l1b74u6c/
// SIG // yTCCB3owggVioAMCAQICCmEOkNIAAAAAAAMwDQYJKoZI
// SIG // hvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAw
// SIG // BgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRl
// SIG // IEF1dGhvcml0eSAyMDExMB4XDTExMDcwODIwNTkwOVoX
// SIG // DTI2MDcwODIxMDkwOVowfjELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEoMCYGA1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmlu
// SIG // ZyBQQ0EgMjAxMTCCAiIwDQYJKoZIhvcNAQEBBQADggIP
// SIG // ADCCAgoCggIBAKvw+nIQHC6t2G6qghBNNLrytlghn0Ib
// SIG // KmvpWlCquAY4GgRJun/DDB7dN2vGEtgL8DjCmQawyDnV
// SIG // ARQxQtOJDXlkh36UYCRsr55JnOloXtLfm1OyCizDr9mp
// SIG // K656Ca/XllnKYBoF6WZ26DJSJhIv56sIUM+zRLdd2MQu
// SIG // A3WraPPLbfM6XKEW9Ea64DhkrG5kNXimoGMPLdNAk/jj
// SIG // 3gcN1Vx5pUkp5w2+oBN3vpQ97/vjK1oQH01WKKJ6cuAS
// SIG // OrdJXtjt7UORg9l7snuGG9k+sYxd6IlPhBryoS9Z5JA7
// SIG // La4zWMW3Pv4y07MDPbGyr5I4ftKdgCz1TlaRITUlwzlu
// SIG // ZH9TupwPrRkjhMv0ugOGjfdf8NBSv4yUh7zAIXQlXxgo
// SIG // tswnKDglmDlKNs98sZKuHCOnqWbsYR9q4ShJnV+I4iVd
// SIG // 0yFLPlLEtVc/JAPw0XpbL9Uj43BdD1FGd7P4AOG8rAKC
// SIG // X9vAFbO9G9RVS+c5oQ/pI0m8GLhEfEXkwcNyeuBy5yTf
// SIG // v0aZxe/CHFfbg43sTUkwp6uO3+xbn6/83bBm4sGXgXvt
// SIG // 1u1L50kppxMopqd9Z4DmimJ4X7IvhNdXnFy/dygo8e1t
// SIG // wyiPLI9AN0/B4YVEicQJTMXUpUMvdJX3bvh4IFgsE11g
// SIG // lZo+TzOE2rCIF96eTvSWsLxGoGyY0uDWiIwLAgMBAAGj
// SIG // ggHtMIIB6TAQBgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4E
// SIG // FgQUSG5k5VAF04KqFzc3IrVtqMp1ApUwGQYJKwYBBAGC
// SIG // NxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8G
// SIG // A1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAUci06AjGQ
// SIG // Q7kUBU7h6qfHMdEjiTQwWgYDVR0fBFMwUTBPoE2gS4ZJ
// SIG // aHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwv
// SIG // cHJvZHVjdHMvTWljUm9vQ2VyQXV0MjAxMV8yMDExXzAz
// SIG // XzIyLmNybDBeBggrBgEFBQcBAQRSMFAwTgYIKwYBBQUH
// SIG // MAKGQmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kv
// SIG // Y2VydHMvTWljUm9vQ2VyQXV0MjAxMV8yMDExXzAzXzIy
// SIG // LmNydDCBnwYDVR0gBIGXMIGUMIGRBgkrBgEEAYI3LgMw
// SIG // gYMwPwYIKwYBBQUHAgEWM2h0dHA6Ly93d3cubWljcm9z
// SIG // b2Z0LmNvbS9wa2lvcHMvZG9jcy9wcmltYXJ5Y3BzLmh0
// SIG // bTBABggrBgEFBQcCAjA0HjIgHQBMAGUAZwBhAGwAXwBw
// SIG // AG8AbABpAGMAeQBfAHMAdABhAHQAZQBtAGUAbgB0AC4g
// SIG // HTANBgkqhkiG9w0BAQsFAAOCAgEAZ/KGpZjgVHkaLtPY
// SIG // dGcimwuWEeFjkplCln3SeQyQwWVfLiw++MNy0W2D/r4/
// SIG // 6ArKO79HqaPzadtjvyI1pZddZYSQfYtGUFXYDJJ80hpL
// SIG // HPM8QotS0LD9a+M+By4pm+Y9G6XUtR13lDni6WTJRD14
// SIG // eiPzE32mkHSDjfTLJgJGKsKKELukqQUMm+1o+mgulaAq
// SIG // PyprWEljHwlpblqYluSD9MCP80Yr3vw70L01724lruWv
// SIG // J+3Q3fMOr5kol5hNDj0L8giJ1h/DMhji8MUtzluetEk5
// SIG // CsYKwsatruWy2dsViFFFWDgycScaf7H0J/jeLDogaZiy
// SIG // WYlobm+nt3TDQAUGpgEqKD6CPxNNZgvAs0314Y9/HG8V
// SIG // fUWnduVAKmWjw11SYobDHWM2l4bf2vP48hahmifhzaWX
// SIG // 0O5dY0HjWwechz4GdwbRBrF1HxS+YWG18NzGGwS+30HH
// SIG // Diju3mUv7Jf2oVyW2ADWoUa9WfOXpQlLSBCZgB/QACnF
// SIG // sZulP0V3HjXG0qKin3p6IvpIlR+r+0cjgPWe+L9rt0uX
// SIG // 4ut1eBrs6jeZeRhL/9azI2h15q/6/IvrC4DqaTuv/DDt
// SIG // BEyO3991bWORPdGdVk5Pv4BXIqF4ETIheu9BCrE/+6jM
// SIG // pF3BoYibV3FWTkhFwELJm3ZbCoBIa/15n8G9bW1qyVJz
// SIG // Ew16UM0xghoNMIIaCQIBATCBlTB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExAhMzAAAD9LjEXeFOcLZ+AAAA
// SIG // AAP0MA0GCWCGSAFlAwQCAQUAoIGuMBkGCSqGSIb3DQEJ
// SIG // AzEMBgorBgEEAYI3AgEEMBwGCisGAQQBgjcCAQsxDjAM
// SIG // BgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJBDEiBCAXiuop
// SIG // Eka7Pe6uSAcUQzG8qaT0c7slz7LsZCfmAIywLzBCBgor
// SIG // BgEEAYI3AgEMMTQwMqAUgBIATQBpAGMAcgBvAHMAbwBm
// SIG // AHShGoAYaHR0cDovL3d3dy5taWNyb3NvZnQuY29tMA0G
// SIG // CSqGSIb3DQEBAQUABIIBAK3due2h1HJccmKaq4DHYb+i
// SIG // gtgBrvDNxS0q01A5zreX5WuuHJ+FHVn2rfmUuRB+tq1P
// SIG // WwykawsAA2DkYnC3EjApmOkOYIUCjTK7I9tV2PaeQc7C
// SIG // LdoloKpYUup0Yg+7Jh/l7ZQGl/HNGtBFjZlgfE0lnyMK
// SIG // 2EW0vjMUqzzfJzGWI+uQGLg7vFCoF1Y6wpWc/mtTnjKz
// SIG // jXwR/oeXdBdgaXvDCU8BAtzFcPpW//28KnAcd2SEEccK
// SIG // sxw7Yh/keaxi+me6Dk4RcwiHXBZYK4Z6yS1r6WQjunXg
// SIG // fHHQVrcsD/bnyjaS0uuoB9vAIn3ikDsoS27zSRp7LXAM
// SIG // ddxV+ccliu2hgheXMIIXkwYKKwYBBAGCNwMDATGCF4Mw
// SIG // ghd/BgkqhkiG9w0BBwKgghdwMIIXbAIBAzEPMA0GCWCG
// SIG // SAFlAwQCAQUAMIIBUgYLKoZIhvcNAQkQAQSgggFBBIIB
// SIG // PTCCATkCAQEGCisGAQQBhFkKAwEwMTANBglghkgBZQME
// SIG // AgEFAAQgAp8xb6+Hg4d5ztj5vTCHqz420urRRJw9J+4O
// SIG // HatagroCBmgSsTggKRgTMjAyNTA1MTMxODAwMjEuNjY2
// SIG // WjAEgAIB9KCB0aSBzjCByzELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjElMCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3Bl
// SIG // cmF0aW9uczEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNO
// SIG // Ojg2MDMtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBTZXJ2aWNloIIR7TCCByAwggUI
// SIG // oAMCAQICEzMAAAIHLBE5ic2F+8UAAQAAAgcwDQYJKoZI
// SIG // hvcNAQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
// SIG // A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIw
// SIG // MTAwHhcNMjUwMTMwMTk0MjUyWhcNMjYwNDIyMTk0MjUy
// SIG // WjCByzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjElMCMGA1UECxMc
// SIG // TWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0aW9uczEnMCUG
// SIG // A1UECxMeblNoaWVsZCBUU1MgRVNOOjg2MDMtMDVFMC1E
// SIG // OTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBTZXJ2aWNlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8A
// SIG // MIICCgKCAgEAxT//enT5nH4Dg3t/57hb3rgbLfyZksUp
// SIG // Dp/PWRcrR0Jt+OIi6D6pFcLPgolHo0Gmyn/v3OylNZ6s
// SIG // AJprYj5xvM5uEpffkSWWkOA8d6rQPZnUHUuwoX+mFGz+
// SIG // GfvvJWjW00IoCaFwps5Vd+L5guM6RaxE+CgAE410jytL
// SIG // ELhYSq+5bTWjBRnJV0pyIXJ0nI/UFA1S0KQLCbbCh8hz
// SIG // e3De+GhFy6RRnNSPlmBUcWk4Kkj6hkXxH7kNshqwG1oy
// SIG // WDl7nnkwNTFSoVvM80hKX4yniv7dl7ispKQlGip+bPLK
// SIG // jWyN2x7f6xP6Tc8FpwCs/jzgUWycSJJi/p/xDFYq+bvL
// SIG // slj5dbfPDCuedQBlYfth+M4kdeGA8c8ghvduIGqJyo4n
// SIG // GJ1lATrV65zyugEvyzemPvCsYdumurymxW82qllwI8xI
// SIG // kPBGPSvaWCPygsoIsYw8B31IFUlgsk/CsO5hgclGZkTz
// SIG // 8VzjZbjHvz/ArQSTKbofAgVso7xXxZjkjUSvBE5FJpU1
// SIG // AEdQiDmngaixsLHEoRX8rw0K2woZoV4m+J0TF+VPWK/X
// SIG // e1XGB5+nmSbIMs4eUCpSGwkAv2L4RSuNnHggQzG3Pjre
// SIG // Uek/zMHHuY1clQpql1cVjmkHOKwNp1e6JzDmQulLwhvC
// SIG // xhUmQZ49ZaAwy1qPyPkbkaJNo/0OM3DJ8JECAwEAAaOC
// SIG // AUkwggFFMB0GA1UdDgQWBBRytVJiwr160Ar0ffCQatfP
// SIG // +M6NHjAfBgNVHSMEGDAWgBSfpxVdAF5iXYP05dJlpxtT
// SIG // NRnpcjBfBgNVHR8EWDBWMFSgUqBQhk5odHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2NybC9NaWNyb3Nv
// SIG // ZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAxMCgxKS5j
// SIG // cmwwbAYIKwYBBQUHAQEEYDBeMFwGCCsGAQUFBzAChlBo
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2Nl
// SIG // cnRzL01pY3Jvc29mdCUyMFRpbWUtU3RhbXAlMjBQQ0El
// SIG // MjAyMDEwKDEpLmNydDAMBgNVHRMBAf8EAjAAMBYGA1Ud
// SIG // JQEB/wQMMAoGCCsGAQUFBwMIMA4GA1UdDwEB/wQEAwIH
// SIG // gDANBgkqhkiG9w0BAQsFAAOCAgEA47tKrj254sdLJRIw
// SIG // +49ttuKWDjxk5nQ7ztPmzUQjZGalL9Oz9OJ39SH92P4i
// SIG // RJlGlO8NdhZufNiJqQ/ysNgpV6zSiz0wTup38bzjxrWp
// SIG // aQJeMKqBoGcb6cW9shLpxuMmUOhEDqYNXRPbjl6M3t4A
// SIG // +B47XHO+ZHGvMor6MBCPq4V7lVFge76IOExlMSnZw76Z
// SIG // ORkhl5zoTw4XSHfoOoUcl3WYsIBGvqvTPV3Lc+ExoQ4D
// SIG // ihbGMRYVzSWaPSkbhqunr4bcjXbmK5M4w7VkuoFvGpEe
// SIG // fVIbixrFavuAIKhGPFpV40BjNjk5MgZ5UC6QfKg+8fY0
// SIG // aWNgqtDllpStMHx/9c3n61jefm3vO0sNkz3CLnSCZ9/W
// SIG // 2wxu2sCjFWAx37DyfGb8YFpGbn+mWQJKYdHmBodyFfOO
// SIG // bWi5HSzgr8OPVsaoWuQ5otjo4fBo2ub/ZMmNykxcl90+
// SIG // AtrHMX4Kf+sUXfgxjoTVT71T2v98kVKmObOVGKcvA526
// SIG // aVe50DtrHtx7wkm62/sj8nqG9ZFHzGGvXxNmxLKDGzmh
// SIG // 0YBo4vGT7fyXdmz33UKAR3FDqj8IxwVCHEnO8XSWWI0W
// SIG // +JvNasY5mtwy47jhZYzGU2KL0YhrxDC/cWY9qR0VMr/r
// SIG // Ob+1RsHDOq4zWDOKs2UDOgNkRmCRlO/NBkBtEDvfMPrL
// SIG // nLk1a30wggdxMIIFWaADAgECAhMzAAAAFcXna54Cm0mZ
// SIG // AAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGIMQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMTIwMAYDVQQDEylNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgMjAxMDAeFw0y
// SIG // MTA5MzAxODIyMjVaFw0zMDA5MzAxODMyMjVaMHwxCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29m
// SIG // dCBUaW1lLVN0YW1wIFBDQSAyMDEwMIICIjANBgkqhkiG
// SIG // 9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGmTOe0ciELeaLL
// SIG // 1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YBf2xK4OK9uT4X
// SIG // YDP/XE/HZveVU3Fa4n5KWv64NmeFRiMMtY0Tz3cywBAY
// SIG // 6GB9alKDRLemjkZrBxTzxXb1hlDcwUTIcVxRMTegCjhu
// SIG // je3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+NSZk2pg7uhp7
// SIG // M62AW36MEBydUv626GIl3GoPz130/o5Tz9bshVZN7928
// SIG // jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi947SHJMPgyY9+
// SIG // tVSP3PoFVZhtaDuaRr3tpK56KTesy+uDRedGbsoy1cCG
// SIG // MFxPLOJiss254o2I5JasAUq7vnGpF1tnYN74kpEeHT39
// SIG // IM9zfUGaRnXNxF803RKJ1v2lIH1+/NmeRd+2ci/bfV+A
// SIG // utuqfjbsNkz2K26oElHovwUDo9Fzpk03dJQcNIIP8BDy
// SIG // t0cY7afomXw/TNuvXsLz1dhzPUNOwTM5TI4CvEJoLhDq
// SIG // hFFG4tG9ahhaYQFzymeiXtcodgLiMxhy16cg8ML6EgrX
// SIG // Y28MyTZki1ugpoMhXV8wdJGUlNi5UPkLiWHzNgY1GIRH
// SIG // 29wb0f2y1BzFa/ZcUlFdEtsluq9QBXpsxREdcu+N+VLE
// SIG // hReTwDwV2xo3xwgVGD94q0W29R6HXtqPnhZyacaue7e3
// SIG // PmriLq0CAwEAAaOCAd0wggHZMBIGCSsGAQQBgjcVAQQF
// SIG // AgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqnUv5kxJq+gpE8
// SIG // RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVdAF5iXYP05dJl
// SIG // pxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsGAQQBgjdMg30B
// SIG // ATBBMD8GCCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vcGtpb3BzL0RvY3MvUmVwb3NpdG9yeS5o
// SIG // dG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgwGQYJKwYBBAGC
// SIG // NxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8G
// SIG // A1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgwFoAU1fZWy4/o
// SIG // olxiaNE9lJBb186aGMQwVgYDVR0fBE8wTTBLoEmgR4ZF
// SIG // aHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwv
// SIG // cHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMu
// SIG // Y3JsMFoGCCsGAQUFBwEBBE4wTDBKBggrBgEFBQcwAoY+
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0
// SIG // cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcnQwDQYJ
// SIG // KoZIhvcNAQELBQADggIBAJ1VffwqreEsH2cBMSRb4Z5y
// SIG // S/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfCcTY/2mRsfNB1
// SIG // OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2YurYeeNg2Lpyp
// SIG // glYAA7AFvonoaeC6Ce5732pvvinLbtg/SHUB2RjebYIM
// SIG // 9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRWqveVtihVJ9Ak
// SIG // vUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wXsFSFQrP8DJ6L
// SIG // GYnn8AtqgcKBGUIZUnWKNsIdw2FzLixre24/LAl4FOmR
// SIG // sqlb30mjdAy87JGA0j3mSj5mO0+7hvoyGtmW9I/2kQH2
// SIG // zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8x1RtnWN0SCyx
// SIG // TkctwRQEcb9k+SS+c23Kjgm9swFXSVRk2XPXfx5bRAGO
// SIG // WhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pFEUep8beuyOiJ
// SIG // Xk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq77EFmPWn9y8FB
// SIG // SX5+k77L+DvktxW/tM4+pTFRhLy/AsGConsXHRWJjXD+
// SIG // 57XQKBqJC4822rpM+Zv/Cuk0+CQ1ZyvgDbjmjJnW4SLq
// SIG // 8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7vzhwRNGQ8cir
// SIG // Ooo6CGJ/2XBjU02N7oJtpQUQwXEGahC0HVUzWLOhcGby
// SIG // oYIDUDCCAjgCAQEwgfmhgdGkgc4wgcsxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jvc29mdCBBbWVy
// SIG // aWNhIE9wZXJhdGlvbnMxJzAlBgNVBAsTHm5TaGllbGQg
// SIG // VFNTIEVTTjo4NjAzLTA1RTAtRDk0NzElMCMGA1UEAxMc
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZaIjCgEB
// SIG // MAcGBSsOAwIaAxUA071VP2I/ZVEsngwmoidg2uYVIkug
// SIG // gYMwgYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYD
// SIG // VQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAx
// SIG // MDANBgkqhkiG9w0BAQsFAAIFAOvNqXcwIhgPMjAyNTA1
// SIG // MTMxMTIwMjNaGA8yMDI1MDUxNDExMjAyM1owdzA9Bgor
// SIG // BgEEAYRZCgQBMS8wLTAKAgUA682pdwIBADAKAgEAAgIu
// SIG // UQIB/zAHAgEAAgITOzAKAgUA68769wIBADA2BgorBgEE
// SIG // AYRZCgQCMSgwJjAMBgorBgEEAYRZCgMCoAowCAIBAAID
// SIG // B6EgoQowCAIBAAIDAYagMA0GCSqGSIb3DQEBCwUAA4IB
// SIG // AQBKfdFw9wCxN9h2JvMU1ds1XneFquOnAnsBIPR9Y0uA
// SIG // BF0321GIldrVHwLfnANsnfuUSB4NoWp5pKyyu8yRIU4g
// SIG // 5Okod6nLOYJr30VSrv5qiSMRnFY6IUmobY2HNICUWZ5U
// SIG // DCV0XiUWsRoOTK9zyLIP1tg3rzwcFHD0nlaItRDL5erO
// SIG // XEZYI9Gp4XWK9Coa6M8x9DUFgWbbdnae4cJlRo88rmhR
// SIG // r6PIwHnUDBNVlv2ikzES9+IbtufVp4vD0i7ZKDcNmDBG
// SIG // hccQx4YDnP2bnyCIfeCvyCcWrDuD3rz4Lo0qQAL9AYuO
// SIG // HXWhWpSBS8UAJpElesuAi0RQtoNM6r7Z7fVWMYIEDTCC
// SIG // BAkCAQEwgZMwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
// SIG // A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIw
// SIG // MTACEzMAAAIHLBE5ic2F+8UAAQAAAgcwDQYJYIZIAWUD
// SIG // BAIBBQCgggFKMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0B
// SIG // CRABBDAvBgkqhkiG9w0BCQQxIgQgCzWbMN6aaEzOpX2T
// SIG // Tm/EL2wQ43TFRkcTOU7/kn2iGI4wgfoGCyqGSIb3DQEJ
// SIG // EAIvMYHqMIHnMIHkMIG9BCAv99TR0HbNSGebD57+fafr
// SIG // +gYwQ4KAzyMIgJp9Dx6nszCBmDCBgKR+MHwxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFBDQSAyMDEwAhMzAAACBywROYnNhfvF
// SIG // AAEAAAIHMCIEILBByFiXZzQ23fQMN3OSiFOYoEYV2ajM
// SIG // 8JV+e7TTpcA+MA0GCSqGSIb3DQEBCwUABIICACU7rRJI
// SIG // KElhOs8SBb+6e6C+XdImJ1UMsDfuxGtlqpIbDLl4VGK2
// SIG // P1TrkNZtHctA7fD2ZrZuacJu40xWQ1/Rmjr9JfPOS1IJ
// SIG // ejW1Vu2xmUrNHSZruU5GUFh+umltLf/4cgJtJSEa8j9g
// SIG // Gffzs2/PlhOt1kov3YE7KByTbA4jCc0A0qVS98WcawVZ
// SIG // CQ3DPSFc7/+OhuWcFNp0iamMauSCmHpaME6PJZ40ULO3
// SIG // bZ9E1uHvZCSi1bvBNmAO1fU4t60En2+An4oUJ+vBPZnz
// SIG // oQGH1yml6qdB02ejPxFCkmTL0G0GS612FWR9h0l2YOZv
// SIG // cqR4+1e7t7B7ovF2u5FBvy1RR00D9k/dVMsRCiIMA3v5
// SIG // /seAneQSuQZPFWWnI3tKHgdYD6O/crymia/BvEYciNz3
// SIG // CM2Fc8L+5fexV0PspNUbXdZyEwI5BBN+AVK4do4D93l1
// SIG // GnWSrZeXo45LLT9zgmKkTJHlUn0lxvcBbcu6WA0jHQik
// SIG // QSrfNs+jknHOz4ldDvLMLQDb6XpEzSzs3gWYaSeeD+Zi
// SIG // /j/FdQN2F67ic/qXu5QR178uef6rzjio3DHjB2k3pIpP
// SIG // BuPfzEqaH6+LAObVy8iMF3mXrHsQLrjtdcwdl1BOo5xO
// SIG // S1ECxGyCIspjiONcJ4dNNWQjXddmcS4Hc97zxqCzUJuJ
// SIG // rhRNNaUk8XbTXYw2
// SIG // End signature block
