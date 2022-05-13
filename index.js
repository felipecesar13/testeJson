const express = require("express");

const app = express();

app.use(express.json());

app.get('/.well-known/assetlinks.json', (request, response) => {
    response.json([
        {
            "relation": [
                "delegate_permission/common.handle_all_urls"
            ],
            "target": {
                "namespace": "frontapp",
                "package_name": "br.com.frontsys.frontapp",
                "sha256_cert_fingerprints": [
                    "8A:87:AF:FA:78:58:62:CB:3E:03:B7:63:9C:92:F0:C7:EC:24:8F:CF:4B:7B:04:05:07:8B:6B:E4:6A:B6:13:E0"
                ]
            }
        }
    ])
});

app.listen(8080);