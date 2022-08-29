// 3개 이상의 fn을 활용 할 때에는, js파일을 직접만들어 import하는 것이 좋다.
$('#myId')  // 지금부터 주석으로 작성하는것은 해당 콜렉션이 무엇을 부르는지 작성하는것이다.
            // <div id='myid></div>

// 과제] class myClass DOM들을 찾아라.
$('.myClass')

// 과제] name attribute value가 surname인 input DOM들을 찾아라.
$('input[name="surname"]')  //<input name='surname'/>

$('#contents ul.people li')
// 과제] 위 selector로 찾아낼 수 있는 html code를 작성하라.
/*
<div id='contents'>
    <ul class='people'>  -> li를 리턴
        <li></li>
    </ul>
</div>
*/

$('a.external:first')   // <-> last - 마지막을 리턴
/*
<a class='external'></a>    ->  first시 리턴
<a class='external'></a>    ->  last시 리턴
*/

$('tr:odd') // 짝수번째 tr을 호출 <-> even - 홀수번째를 호출 (왜냐하면 컴퓨터는 0부터이므로)
/*
<tr/>   // even
<tr/>   // odd
<tr/>   // even
<tr/>   // odd
*/

$('div:visible')    // 화면에 보이는 div들

$('div:gt(1)')  // gt(index) - greater then -> index의 value보다 큰 index들을 리턴
                // <-> lt(index) - less then -> index의 value보다 작은 index들을 리턴
/*
<div></div>-- div:lt(1)은 여기서부터 역순
<div></div>
<div></div> -- div:gt(1)은 여기서부터 정순
*/

$('div:animated')   // html에서 작동중인

$('a[rel$="thinger"]')  // rel의 속성값에 thinger가 포함된 것을 리턴
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>        // 2가지다 thinger가 포함되있으므로 둘다 리턴
*/

$('div.foo').has('p')   // !!!.has(...) - ...을 !!!이 자식으로 가지고있으면 리턴
/*
<div class='foo'>   // 이 div를 리턴한다.
    <p></p>
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.current')   // filter(...) - ...속성을 가진 collection을 리턴
                                // <->자식으로 가지는 것을 찾는 has와는 다르다.
$('ul li').not('.current')      // not(...) - ...속성을 가지지않은 collection을 리턴
/*
<ul>
    <li class='current'></li>   // filter는 이 li를 리턴
    <li></li>                   // not은 이 li를 리턴
</ul>
*/

$('form :radio')    // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked')
/*
<input type='radio'/>       // 이 객체들중에 체크된것을 collection에 담아 리턴.
<input type='checkbox'/>
<select><option></option></select>  // 옵션중에 체크된것을 찾음
*/

$('form selected')          // <select><option></option></select>  // selected된것을 찾음

$('form :enabled')  // 작동되는 form을 리턴
$('form :disabled') // 작동되지 않는 form을 리턴

$('form :file') // <input type='file'/>
$('form :input') // input은 가지고있는 타입에 관계없이 전부 다 리턴
/*
<input type='...'/>
<textarea></textarea>
<select></select>
<button type='submit'></button>
// 버튼의 속성은 button reset submit
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio')    // name속성으로 gender를 가진 input중 radio타입을 찾는다.
// 과제] 위 selector에서 해당하는 HTML code를 작성하라.
/*
<form>
    <input name='gender' type='radio'/>
</form>
*/

$('form :reset')    // <input type='reset'/>

$('form :submit')    // <input type='submit'/>