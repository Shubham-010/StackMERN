command1="npm start"
command2="npm run devpower"

# Define the files on which you want to execute the commands
file1="fullclient"
file2="server"

# Execute command1 on file1
echo "Running command 1 on $file1"
$command1 $file1

# Execute command2 on file2
echo "Running command 2 on $file2"
$command2 $file2