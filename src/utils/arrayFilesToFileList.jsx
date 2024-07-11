export default function arrayFilesToFileList(filesList) {
    return filesList.reduce(function (dataTransfer, file) {        
        dataTransfer.items.add(file);
        return dataTransfer;
    }, new DataTransfer()).files;
}
