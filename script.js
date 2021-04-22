let words = [
    'Небо',
    'Изюбрь',
    'Компьютер',
    'Пиксель',
    'Хорошо',
    'Авторитет',
    'Рефрактор',
    'Вариант',
    'Секунда',
    'Караван',
    'Аутист',
    'Альпинизм',
    'Забить',
    'Олень',
    'Федерация',
    'Путин',
    'Послание',
    'Колонка',
    'Перчатка',

];

let letters_remain = 0;
let cur_word = '';
let error_count = 1;
let gamer = 'Пользователь';
let same_letter = '';

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

$(function(){
    $('.name_submit').on('click', (e)=>{
        e.preventDefault();
        
        if ($('#first_name').val()!=''){
            gamer = $('#first_name').val();
        }
        
        $('h1').html(`Угадай загаданное слово, ${gamer}`);
        $('.first_form').addClass('none');
        $('.game_warp').addClass('block');
    });

    cur_word = [...arrayRandElement(words).toLowerCase()];
    letters_remain = cur_word.length
    for(let i of cur_word){
        console.log(i)
        $('.game_section_word').append(
            `<div class='word_item' NumVal=${i}>_<div>`
        )
    }
    
    $('.alphabet_item').on('click', (e)=>{
        if(error_count < 6 && letters_remain > 0){
            same_letter = e.target.innerHTML
            let pos = cur_word.indexOf(same_letter)
            if(pos!=-1){
                let elems = document.getElementsByClassName('word_item')
                console.log(elems)
                let i = 0;
                for (let elem of elems){
                    console.log(cur_word[i])
                    if((same_letter)==cur_word[i]){
                        elem.innerHTML = elem.getAttribute("NumVal")
                        letters_remain-=1;
                        console.log(letters_remain)
                    }
                    i++;
                }
            }else{
                error_count += 1;
                console.log(error_count)
                $('#game_img').attr("src", `style/img/${error_count}.png`)
            }
        }
        if(error_count == 6){
            $('h1').html(`Вы проиграли, ${gamer}`);
        }else if(letters_remain == 0){
            $('h1').html(`Вы победили, ${gamer}!`);
        }
    });

    
});