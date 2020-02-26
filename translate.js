function translateEtoV()
{
    let english = ["hello", "goodbye", "find", "rest"];
    let vietnamese = ["xin chao", "tam biet", "tim thay", "nghi ngoi"];
    let inputWord = document.getElementById("english").value;
    let result = english.indexOf(inputWord.toLowerCase());
    if (result !== -1)
    {
        document.getElementById("vietnamese").value = vietnamese[result];
    }
    else
    {
        document.getElementById("vietnamese").value = "Khong tim thay!"
    }
}