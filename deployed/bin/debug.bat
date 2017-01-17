SET CWD=%~dp0/..
CD %CWD%

ECHO "clean deploy directory"
CALL fis3 server clean --root ./deployed

ECHO "make deploy"
CALL fis3 release localhost -wL --verbose

PAUSE

