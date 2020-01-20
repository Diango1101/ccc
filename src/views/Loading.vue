<template>
    <div id="loading">
        <img class="island" src="common/home/island.png" alt="">
        <img class="tip" src="common/home/loadingTip.png" alt="">
        <div class="progressBar">
            <el-progress :text-inside="true" :percentage="progress" color="#161AC4"></el-progress>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      sourceList: [
        'common/home/background.png',
        'common/home/bg.png',
        'common/home/home_boat_l.png',
        'common/home/home_boat_lm.png',
        'common/home/home_boat_m.png',
        'common/home/home_boat_r.png',
        'common/home/home_boat_rm.png',
        'common/home/home_title.png',
        'common/home/home_up.png',
        'common/home/island.png',
        'common/home/loadingTip.png',
        'common/home/people.png',
        'common/home/progressBar.png',
        'common/home/start-btn.png',
        'common/home/title.png',
        'common/q1/A.png',
        'common/q1/B.png',
        'common/q1/C.png',
        'common/q1/photo1.png',
        'common/q1/question1.png',
        'common/q2/A.png',
        'common/q2/B.png',
        'common/q2/C.png',
        'common/q2/photo2.png',
        'common/q2/question2.png',
        'common/q3/A.png',
        'common/q3/B.png',
        'common/q3/C.png',
        'common/q3/photo3.png',
        'common/q3/question3.png',
        'common/q4/A.png',
        'common/q4/B.png',
        'common/q4/C.png',
        'common/q4/photo4.png',
        'common/q4/question4.png',
        'common/q5/A.png',
        'common/q5/B.png',
        'common/q5/C.png',
        'common/q5/photo5.png',
        'common/q5/question5.png',
        'common/q6/A.png',
        'common/q6/B.png',
        'common/q6/C.png',
        'common/q6/D.png',
        'common/q6/photo6.png',
        'common/q6/question6.png',
        'common/q7/A.png',
        'common/q7/B.png',
        'common/q7/C.png',
        'common/q7/photo7.png',
        'common/q7/question7.png',
        'common/q8/A.png',
        'common/q8/B.png',
        'common/q8/C.png',
        'common/q8/photo8.png',
        'common/q8/question8.png',
        'common/clamp.png',
        'common/leaves.png',
        'common/line.png',
        'common/result1.png',
        'common/result2.png',
        'common/result3.png',
        'common/result4.png',
        'common/result5.png',
        'common/shoes.png'
      ],
      resTotal: 1,
      resLoaded: 0
    }
  },
  computed: {
    progress () {
      return parseInt((this.resLoaded / this.resTotal) * 100)
    }
  },
  watch: {
    progress (val) {
      if (val === 100) {
        this.$router.replace('home')
      }
    }
  },
  mounted () {
    let imgs = []
    this.resTotal = this.sourceList.length
    let that = this
    for (let i = 0; i < this.sourceList.length; i++) {
      imgs = new Image()
      imgs.src = this.sourceList[i]
      imgs.onload = function () {
        that.resLoaded += 1
        console.log('资源', i, '加载完成，进度', that.progress)
      }
    }
  }
}
</script>

<style lang="scss">
    #loading {
        position: relative;
        /*text-align: center;*/
        .island {
            width: 2.42rem;
            height: 2.72rem;
            position: absolute;
            top: 3.12rem;
            left: 0;
            right: 0;
            margin: 0 auto;
        }

        .tip {
            width: 3.26rem;
            height: 1.08rem;
            position: absolute;
            top: 5.97rem;
            left: 0;
            right: 0;
            margin: 0 auto;
        }

        .progressBar {
            position: absolute;
            top: 7.17rem;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 3rem;
            height: .28rem;
            text-align: center;

            .el-progress {
                .el-progress-bar__outer {
                    border: black .06rem solid;
                    height: .3rem !important;
                    background-color: #EA0403;
                }
            }
        }
    }
</style>
