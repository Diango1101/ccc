<template>
    <div class="question1">
        <div class="photo" :class="start ? 'photo-in' : (end ? 'photo-out':'')">
            <img class="line" src="common/line.png">
            <img class="picture" :src="question.picture">
            <img class="clamp" src="common/clamp.png">
        </div>
        <img class="quimg" :class="start ? 'qu-in' : (end?'qu-out':'')" :src="question.quimg">
        <img class="shoes" :class="start ? 'shoes-in' : (end?'shoes-out':'')" src="common/shoes.png">
        <img class="leaves" :class="start ? 'leaves-in' : (end?'leaves-out':'')" src="common/leaves.png">
        <img class="a" :style="question.options[0].style" :class="start ? 'a-in' : (end?'a-out':'')" :src="question.options[0].src" @click="choose(question.options[0].props)">
        <img class="b" :style="question.options[1].style" :class="start ? 'b-in' : (end?'b-out':'')" :src="question.options[1].src" @click="choose(question.options[1].props)">
        <img class="c" :style="question.options[2].style" :class="start ? 'a-in' : (end?'a-out':'')" :src="question.options[2].src" @click="choose(question.options[2].props)">
        <img class="d" :style="question.options[3].style" v-show="question.q4exsit" :class="start ? 'b-in' : (end?'b-out':'')" :src="question.options[3].src" @click="choose(question.options[3].props)">
    </div>
</template>

<script>
import { timingSafeEqual } from 'crypto';
import { setTimeout } from 'timers';
/* eslint-disable */
export default {
    name: "question",
    props: { question: Object },
    data(){
        return {
            start: false,
            end: false,
            mutex:false
        }
    },
    mounted(){
        console.log(this.question)
        console.log(this.global.score)
        this.$nextTick(()=>{
            this.start = true;
        })
    },
    methods:{
        choose(e){
            if(this.mutex) return;
            switch (e)
            {
                case 0:
                    break;
                case 1:
                    this.global.score[0].value++;
                    break;
                case 2:
                    this.global.score[1].value++;
                    break;
                case 3:
                    this.global.score[2].value++;
                    break;
                case 4:
                    this.global.score[3].value++;
                    break;
                case 5:
                    this.global.score[4].value++;
                    break;
            }
            console.log(this.global.score)
            this.mutex = true
            // 1. 触发结算操作
            this.start = false
            this.end = true
            // 2. 抛出切换事件
            setTimeout(()=>{
                this.$emit('choose')
            }, 1000)
            
        }
    }
}
</script>

<style scoped lang="scss">
@import '../assets/css/animation.css';
    .question1{
        background-image: url("../assets/images/background.png");
        background-size: 100%;
        height: 100%;
        width: 100%;
        .photo{
            position: relative;
            width: 100%;
            height: 5.79rem;
            z-index: 2;
            // animation: photoIn 1s linear 1 forwards;
            .line{
                position: absolute;
                top: 0.85rem;
                left: 0;
                background-color: #000;
                width:6.4rem;
                height:0.08rem;
            }
            .picture{
                position: absolute;
                top: 0.46rem;
                left: 0.63rem;
                width: 5.17rem;
            }
            .clamp{
                position: absolute;
                top: -0.32rem;
                left: 3.78rem;
                width: 1.7rem;
            }
            
        }
        .shoes{
            position: absolute;
            top: 4.35rem;
            left: 0.18rem;
            width: 1.16rem;
            opacity: 0;
            z-index: 3;
        }
        .leaves{
            position: absolute;
            height: 1.42rem;
            top: 4.73rem;
            right: -0.62rem;
            opacity: 0;
            z-index: 3;
        }
        .quimg{
            position: relative;
            display: block;
            margin: 0 auto;
            margin-top: -0.3rem;
            // top: 5.57rem;
            // left: 0.44rem;
            width: 5.71rem;
            opacity: 0; 
            z-index: 1;
        }
        .a{
            position: relative;
            // width: 6.01rem;
            display: block;
            // margin: 0 auto;
            // margin-top: -0.1rem;
            opacity: 0; 
            z-index: 10;
        }
        .b{
            position: relative;
            // width: 6.01rem;
            display: block;
            // margin: 0 auto;
            // margin-top: -0.1rem;
            // top: 8.27rem;
            // left: 0.2rem;
            opacity: 0;  
            z-index: 10;
        }
        .c{
            position: relative;
            // width: 6.01rem;
            display: block;
            // margin: 0 auto;
            // margin-top: -0.1rem;
            // top: 9.27rem;
            // left: 0.2rem;
            opacity: 0; 
            z-index: 10;
        }
        .d{
            position: relative;
            width: 6.01rem;
            display: block;
            margin: 0 auto;
            margin-top: -0.1rem;
            // top: 8.27rem;
            // left: 0.2rem;
            opacity: 0;  
            z-index: 10;
        }
    }

    
</style>
