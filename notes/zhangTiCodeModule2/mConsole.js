(function () {
    var htmlText = '';
    htmlText += '<div class="mobile_console" style="height:50%; width:98%; position:fixed; bottom:0px; background-color:#ddd">';
    htmlText += '        <div class="outPutWin" style="height:90%; overflow-y:auto"></div>';
    htmlText += '        <div style="position:absolute;bottom:0px;width:100%">';
    htmlText += '            <input class="commandInput" style="width:85%;" />';
    htmlText += '            <button class="runBtn">RUN</button>';
    htmlText += '        </div>';
    htmlText += '    </div>';    
    


    $(function () {
        $('body').append($(htmlText).show());


        var consoleWin = $('.mobile_console'),
            cmdInput = consoleWin.find('.commandInput'),
            runBtn = consoleWin.find('button.runBtn'),
            outPutWin = consoleWin.find('.outPutWin'),
            cmdQueue = [], cmdIdx = 0, cmdLength = 0;


        $(document).bind('keydown', function (event) {
            if (event.keyCode == 123) {
                consoleWin.toggle();
            }
        });

        var rawLog = console.log;
        console.log = function (log) {
            mcwlog(log);
            rawLog.call(this, log);
        };

        var mcwlog = function (log) {
            var htmlStr = outPutWin.html();
            outPutWin.html(htmlStr + "<br/>" + log);
        }

        var execCmd = function () {
            var command = cmdInput.val();
            if (!command) return;
            cmdQueue.push(command);
            cmdLength++;
            cmdIdx = cmdLength;
            try {
                if (command == 'cls') {
                    outPutWin.empty();
                    return;
                }
                var result = eval(command);
                console.log(result);
            }
            catch (e) {
                console.log(e.message);
            }
            finally {
                cmdInput.val('');
            }
        }

        cmdInput.bind('keydown', function (event) {
            if (event.keyCode == 13) {
                execCmd();
            }
            else if (event.keyCode == 38) {//up
                cmdIdx--;
                if (cmdIdx < 0) {
                    cmdIdx = cmdLength - 1;
                }
                var cmd = cmdQueue.slice(cmdIdx, cmdIdx + 1);
                cmdInput.val(cmd);
                event.preventDefault();
            }
            else if (event.keyCode == 40) {//up
                cmdIdx++;
                if (cmdIdx >= cmdLength) {
                    cmdIdx = 0;
                }
                var cmd = cmdQueue.slice(cmdIdx, cmdIdx + 1);
                cmdInput.val(cmd);
                event.preventDefault();
            }
        });


        runBtn.click(function () {
            execCmd();
        });

    });


})()