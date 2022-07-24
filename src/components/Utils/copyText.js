export default function copyText(elementID, setCopied) {
    var textToCopy = document.getElementById(elementID);

    // Copy the text to clipboard
    navigator.clipboard.writeText(textToCopy.innerHTML);
    setCopied(true);
}