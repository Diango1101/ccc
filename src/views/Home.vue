<template>
    <div id="home">
        <v-touch class="ready" v-show="!startPage" v-on:swipeup="onSwipeup">
            <img class="title" src="common/home/home_title.png" alt="">
            <img class="boat boat_l" src="common/home/home_boat_l.png" alt="">
            <img class="boat boat_lm" src="common/home/home_boat_lm.png" alt="">
            <img class="boat boat_m" src="common/home/home_boat_m.png" alt="">
            <img class="boat boat_rm" src="common/home/home_boat_rm.png" alt="">
            <img class="boat boat_r" src="common/home/home_boat_r.png" alt="">
            <img class="people" src="common/home/people.png">
            <img class="home_up" src="common/home/home_up.png">
        </v-touch>
        <div>
            <img class="musicon" src="common/musicon.png" @click="musicoff" style="width:0.5rem;position:absolute;top:0.2rem;right:0.2rem;">
            <img class="musicoff" src="common/musicoff.png" @click="musicon" style="display:none;width:0.5rem;position:absolute;top:0.2rem;right:0.2rem;">
        </div>
<!--        <transition name="start-fade" v-if="startPage">-->
        <div class="start" v-show="startPage">
            <img class="home-title" src="common/home/title.png" alt="">
            <img @click="toTest" class="start-btn" src="common/home/start-btn.png" alt="">
        </div>
<!--        </transition>-->

    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Home',
  data () {
    return {
      startPage: false
    }
  },
  methods: {
    onSwipeup () {
      this.startPage = true
      console.log('上滑')
    },
    toTest () {
      this.$router.replace('answer')
      console.log('开始')
    },
    musicoff(){
        $('.musicon').hide()
        $('.musicoff').show()
        var media = document.querySelector('#bg-music');
        media.pause();
    },
    musicon(){
        $('.musicon').show()
        $('.musicoff').hide()
        var media = document.querySelector('#bg-music')
        media.play();
    }
  }
}
</script>

<style scoped lang="scss">
    $boatTime:1.5s;
    #home {
        position: relative;
        height: 100%;

        .title {
            width: 5.59rem;
            height: 2.92rem;
            position: absolute;
            top: .61rem;
            left: 0;
            right: 0;
            margin: auto;
        }

        .boat {
            position: absolute;
        }

        .boat_l {
            width: 1.78rem;
            height: 2.95rem;
            top: 6rem;
            animation: flow_boat_l $boatTime;
        }
        @keyframes flow_boat_l {
            0%{
                transform: translate(-1rem,-2rem);
            }
            100%{
                transform: translate(0,0);
            }
        }

        .boat_lm {
            width: 2.52rem;
            height: 2.53rem;
            top: 4.15rem;
            left: .14rem;
            animation: flow_boat_lm $boatTime;
        }
        @keyframes flow_boat_lm {
            0%{
                transform: translate(-0.5rem,-1.6rem);
            }
            100%{
                transform: translate(0,0);
            }
        }

        .boat_m {
            width: 2.09rem;
            height: 3.01rem;
            top: 3.28rem;
            left: 2.68rem;
            animation: flow_boat_m $boatTime;
        }
        @keyframes flow_boat_m {
            0%{
                transform: translate(.2rem,-2rem);
            }
            100%{
                transform: translate(0,0);
            }
        }

        .boat_rm {
            width: 2.54rem;
            height: 2.14rem;
            right: -0.1rem;
            top: 4.58rem;
            animation: flow_boat_rm $boatTime;
        }
        @keyframes flow_boat_rm {
            0%{
                transform: translate(1rem,-.2rem);
            }
            100%{
                transform: translate(0,0);
            }
        }

        .boat_r {
            width: 1.86rem;
            height: 2.49rem;
            right: 0;
            top: 6.53rem;
            animation: flow_boat_r $boatTime;
        }
        @keyframes flow_boat_r {
            0%{
                transform: translate(1rem,-.2rem);
            }
            100%{
                transform: translate(0,0);
            }
        }

        .people {
            position: absolute;
            width: 5.84rem;
            height: 4.68rem;
            left: 0;
            top: 6.57rem;
        }

        .home_up {
            position: absolute;
            top: 9.1rem;
            width: 1rem;
            height: 1rem;
            left: 0;
            right: 0;
            margin: 0 auto;
        }

        .start-fade-enter-active {
            transition: opacity 5s;
        }
        .start-fade-enter {
            /*transform: translateX(10px);*/
            opacity: 0;
        }

        .start {
            width: 100%;
            height: 100%;
            background: url("../../public/common/home/bg.png");
            background-size: 100%;
            background-repeat: no-repeat;

            .home-title {
                width: 6.4rem;
                height: 3.94rem;
                position: absolute;
                top: 2.18rem;
                left: 0;
                right: 0;
                margin: auto;
            }

            .start-btn {
                width: 4.96rem;
                height: 1.33rem;
                position: absolute;
                top: 6.19rem;
                left: 0;
                right: 0;
                margin: auto;
            }
        }
    }

</style>
