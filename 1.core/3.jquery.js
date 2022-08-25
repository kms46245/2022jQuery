// 3개 이상의 fn을 활용할때에는 지금처럼 js파일을 직접만들어서 임포트
// 하는것이 좋다.
$('#myId')  // collection에 들어가서 리턴되는것의 예) <div id='myid></div>

// 과제] class myClass DOM들을 찾아라.
$('.myClass')

// 과제] name attribute value 가 surname 인 input DOM 들을 찾아라.
//$(input[name*='surname']) // myCode
$('input[name="surname"]')  // <input name='surname'/>

$('#contents ul.people li')
// 과제] 위 seletor로 찾아낼수있는 html code를 작성하라.
/*
<div id='contents'>
    <ul class='people'>
        <li></li>           --> 이 li를 리턴
    </ul>
</div>
*/

$('a.external:first')
/*
<a class='external'></a> -> first
<a class='external'></a> -> second
*/

$('tr:odd')  // 홀수번째의 tr을 호출
/*
<tr/>   // 
<tr/>   // odd
<tr/>   //  
<tr/>   // odd
*/

$('div:visible')

$('div:gt(1)')  // gt(index) - greater then > index의 value보다 크다
/*
<div></div>
<div></div>
<div></div> -- 첫번째 인덱스 보다 큰(2번째부터)
*/

$('div:animated')   // 작동중인

$('a[rel$="thinger"]') // rel의 속성값을 thinger를 가진 것
/*
<a rel='do-nothinger'></a>  // thinger로 끝나는 rel들을 찾는다.
<a rel='so-thinger'></a>     
*/

$('div.foo').has('p')   // has() - has의 파라미터값을 자식으로 가진 collection을 $(...)중에서 고른다.
/*
<div class='foo'>
    <p></p>         --> 이 div를 리턴한다.
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.current')   // filter(...) - ...속성을 가진 collection을 리턴.  
                                // <-> 자식으로가진것을 찾는 has와는 조금 다르다.
$('ul li').not('.current')      // not(...) - ...속성을 가지지않은 collection을 리턴.
/*
<ul>
    <li class='current'></li>   -> filter는 이 li가 리턴
    <li></li>                   -> not은 이 li가 리턴
</ul>
*/

$('ul li').eq(1)    // eq(index) - index번째의 collection이 리턴

$('form :button')
/*
    <form>
        <button></button>       // 이 두가지가 collection에 담겨서 리턴
        <input type='button'>   
    </form>
*/

$('form :radio')    // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked')
/*
<input type='radio'/>       // 이 객체들중에 체크된것을 collection에 담아 리턴.
<input type='checkbox'/>
<select><option></option></select>  // 옵션중에 체크된것을 찾음
*/

$('form :selected')
/*
<select><option></option></select>  // selected된것을 찾음
*/

$('form :enabled')  // 작동되는것을 리턴
$('form :disabled') // 작동되지않는것을 리턴

$('form :file')     // <input type='file'/>
$('form :input')    // 모든타입을 가지는 input은 전부 리턴
/*
<input type='...'/>
<textarea></textarea>
<select></select>
<button type='submit'></button> // 버튼의 속성은 button reset submit
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio')    // gender의 name속성을 가진 input중에 radio객체를 찾는다.
// 과제: 위 selector에 해당하는 HTML code를 작성하라.
/*
<form>
    <input name='gender' type='radio'/>
</form>
*/

$('form :reset') // <input type='reset'/>

$('form :submit') // <input type='submit'/>