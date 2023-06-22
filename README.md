# File Manager  
[RS School node.js task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md)

## Description
To start program use ``start`` script
```
npm run start -- --username=your_username
```
## The file manager has the following functionality:

 <details>
  <summary> Basic file operations </summary>

Read file and print it's content in console:
```
cat path_to_file
```  
Create empty file in current working directory:
```
add new_file_name
```
Rename file:
```
rn path_to_file new_filename
```

Copy file:
```
cp path_to_file path_to_new_directory
```
Move file:
```
mv path_to_file path_to_new_directory
```
Delete file:
```
rm path_to_file
```
</details>
 <details>
  <summary> Get information about OS </summary>

Get EOL:
```
os --EOL
```
Get host machine CPUs info:
```
os --cpus
```
Get home directory:
```
os --homedir
```
Get current system user name:
```
os --username
```
Get CPU architecture:
```
os --architecture
```
  
</details>

 <details>
  <summary> Hash calculations </summary>

Calculate hash for file:
```
hash path_to_file
```
 
</details>
 <details>
  <summary> Compress and decompress files </summary>

Compress file (using Brotli algorithm):
```
compress path_to_file path_to_destination
```
Decompress file (using Brotli algorithm):
```
decompress path_to_file path_to_destination
```
</details>