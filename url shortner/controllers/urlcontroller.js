const shortid = require('shortid');
const URL = require('../models/urlmodel');

async function createUrl(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: 'URL required' });
    }

    const shortId = shortid();

    await URL.create({
        shortId,
        redirectURL: body.url,
        visitHistory: []
    });

    return res.json({
        shortUrl: `${req.protocol}://${req.get('host')}/${shortId}`
    });
}

async function redirectUrl(req, res) {
    const shortId = req.params.shortId;

    const entry = await URL.findOne({ shortId });

    console.log("ENTRY:", entry);   // 👈 debug

    if (!entry) {
        return res.send("Not found ❌");
    }

    res.redirect(entry.redirectURL);   // 👈 main logic
}

module.exports = {
    createUrl,
    redirectUrl
};
