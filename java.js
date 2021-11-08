function rah(){
    var p1, p2, q1, q2, res;
    p1=document.getElementById('p1').value;
    p1 = parseInt(p1);
    p2=document.getElementById('p2').value;
    p2 = parseInt(p2);
    q1=document.getElementById('q1').value;
    q1 = parseInt(q1);
    q2=document.getElementById('q2').value;
    q2 = parseInt(q2);
   
    res=((p2-p1)/p1)/((q2-q1)/q1)
    document.getElementById('out').innerHTML=res;
}
