<template>
    <div class="game">
        <v-question class="question"
                    v-for="(q, index) in questionlist"
                    :key="index"
                    v-show="index === cur"
                    @choose="next"
                    :question="q"></v-question>
        <img class="musicon"
                 src="common/musicon.png"
                 @click="musicf"
                 style="width:0.5rem;position:absolute;top:0.2rem;right:0.2rem;z-index:100;">
        <img class="musicoff"
                 src="common/musicoff.png"
                 @click="musico"
                 style="display:none;width:0.5rem;position:absolute;top:0.2rem;right:0.2rem;z-index:100;">
    </div>
</template>

<script>
import question from "../components/question";
import $ from 'jquery';
export default {
    name: "game",
    data() {
        return {
            cur: 0,
            questionlist: [
                {
                    q4exsit: true,
                    picture: "common/q1/photo1.png",
                    quimg: "common/q1/question1.png",
                    options: [
                        {
                            src: "common/q1/A.png",
                            props: 3,
                            style: "width:5.61rem;margin-left: 0.36rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q1/B.png",
                            props: 2,
                            style:
                                "width:5.79rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q1/C.png",
                            props: 1,
                            style:
                                "width:5.56rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        { src: "", props: 0 }
                    ]
                },
                {
                    q4exsit: false,
                    picture: "common/q2/photo2.png",
                    quimg: "common/q2/question2.png",
                    options: [
                        {
                            src: "common/q2/A.png",
                            props: 3,
                            style: "width:5.77rem;margin-left: 0.36rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q2/B.png",
                            props: 2,
                            style:
                                "width:5.74rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q2/C.png",
                            props: 4,
                            style:
                                "width:5.79rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        { src: "", props: 0 }
                    ]
                },
                {
                    q4exsit: false,
                    picture: "common/q3/photo3.png",
                    quimg: "common/q3/question3.png",
                    options: [
                        {
                            src: "common/q3/A.png",
                            props: 3,
                            style:
                                "width:5.83rem;margin-left: 0.36rem;margin-top: -0.27rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q3/B.png",
                            props: 1,
                            style:
                                "width:5.64rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q3/C.png",
                            props: 5,
                            style:
                                "width:5.87rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        { src: "", props: 0 }
                    ]
                },
                {
                    q4exsit: false,
                    picture: "common/q4/photo4.png",
                    quimg: "common/q4/question4.png",
                    options: [
                        {
                            src: "common/q4/A.png",
                            props: 2,
                            style: "width:5.61rem;margin-left: 0.36rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q4/B.png",
                            props: 4,
                            style:
                                "width:5.8rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q4/C.png",
                            props: 5,
                            style:
                                "width:5.93rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        { src: "", props: 0 }
                    ]
                },
                {
                    q4exsit: false,
                    picture: "common/q5/photo5.png",
                    quimg: "common/q5/question5.png",
                    options: [
                        {
                            src: "common/q5/A.png",
                            props: 4,
                            style: "width:5.79rem;margin-left: 0.36rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q5/B.png",
                            props: 3,
                            style:
                                "width:5.72rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q5/C.png",
                            props: 1,
                            style:
                                "width:5.82rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        { src: "", props: 0 }
                    ]
                },
                {
                    q4exsit: true,
                    picture: "common/q6/photo6.png",
                    quimg: "common/q6/question6.png",
                    options: [
                        {
                            src: "common/q6/A.png",
                            props: 2,
                            style: "width:4.65rem;margin-left: 0.86rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q6/B.png",
                            props: 3,
                            style:
                                "width:4.54rem;margin-left: 0.86rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q6/C.png",
                            props: 5,
                            style:
                                "width:4.69rem;margin-left: 0.86rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q6/D.png",
                            props: 4,
                            style:
                                "width:4.3865rem;margin-left: 0.89rem;margin-top:-0.05rem;"
                        }
                    ]
                },
                {
                    q4exsit: false,
                    picture: "common/q7/photo7.png",
                    quimg: "common/q7/question7.png",
                    options: [
                        {
                            src: "common/q7/A.png",
                            props: 1,
                            style: "width:5.9rem;margin-left: 0.36rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q7/B.png",
                            props: 2,
                            style:
                                "width:5.87rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q7/C.png",
                            props: 5,
                            style:
                                "width:5.64rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        { src: "", props: 0 }
                    ]
                },
                {
                    q4exsit: false,
                    picture: "common/q8/photo8.png",
                    quimg: "common/q8/question8.png",
                    options: [
                        {
                            src: "common/q8/A.png",
                            props: 5,
                            style:
                                "width:5.93rem;margin-left: 0.36rem;margin-top: -0.3rem;"
                        }, //1:想象力，2:探索力,3:生命力,4:创造力,5:决策力
                        {
                            src: "common/q8/B.png",
                            props: 4,
                            style:
                                "width:5.91rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        {
                            src: "common/q8/C.png",
                            props: 1,
                            style:
                                "width:5.9rem;margin-left: 0.36rem;margin-top:-0.05rem;"
                        },
                        { src: "", props: 0 }
                    ]
                }
            ]
        };
    },
    mounted() {
        // setTimeout(()=>{
        //     console.log(this.cur ++)
        // },2000)
    },
    methods: {
        next() {
            console.log("next");
            if (this.cur < 8) {
                this.cur++;
            }
            if (this.cur == 8) {
                console.log("跳转结果页");
                this.$router.replace("/result");
            }
        },
        musicf() {
            
            $(".musicon").hide();
            $(".musicoff").show();
            var media = document.querySelector("#bg-music");
            media.pause();
        },
        musico() {
            console.log(111);
             $(".musicon").show();
             $(".musicoff").hide();
             var media = document.querySelector("#bg-music");
             media.play();
        }
    },
    components: {
        "v-question": question
    }
};
</script>
<style lang="scss" scoped>
.game {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
