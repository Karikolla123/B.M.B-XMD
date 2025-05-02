var commands = [B.m.b-Xmd~RfUXxRIC#OkUsIO9x6VuH0PaQOtGIJB0t5_lgghl-Z-wKwysD6ug];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = 'B.m.b-Xmd~RfUXxRIC#OkUsIO9x6VuH0PaQOtGIJB0t5_lgghl-Z-wKwysD6ug';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd,
    Function:cmd,
    Module:cmd,
    commands,
};
