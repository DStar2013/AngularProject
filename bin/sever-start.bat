SET CWD=%~dp0/..
CD %CWD%

REM use `CALL` keywords as only then the program control returns to the caller.

ECHO "clean server root"
CALL fis3 server clean --root deployed
md deployed


ECHO "start server"
CALL fis3 server start -p 20000 --root deployed

PAUSE