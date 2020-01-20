<template>
        <div id="canvas-warp" class="canvas-warp">
            <img :src="resImg" alt="" style="width: 100%;height:100%">
            <img src="common/QRcode.png" style="width: 100%;display:none" id="qrcode">
            <canvas style="display: none" id="testcanvas" width=640 height=1236></canvas>
        </div>
</template>

<script>
import echarts from 'echarts'
import $ from 'jquery'
export default {
  name: 'Result',
  data() {
        return {
            showresult:true,
            resultlist:[
                'common/result1.png',
                'common/result2.png',
                'common/result3.png',
                'common/result4.png',
                'common/result5.png'
            ],
            index:0,
            resImg:''
        };
    },
    mounted(){
        console.log(this.global.score)
        var maxindex=0
        for(var i=0;i<this.global.score.length;i++)
        {
            if(this.global.score[i].value>this.global.score[maxindex].value)
            {
                maxindex=i
            }
        }
        this.index=maxindex
        this.initCanvas(maxindex,this.global.score)
    },
     methods: {
       initCanvas(maxindex,score){
        //画下背景
         var that=this
            var img = new Image()
            img.onload = function() {
                var mW = 640
                var mH = 1236
                var mCtx = null
                var canvas = document.getElementById('testcanvas')
                canvas.height = mH
                canvas.width = mW
                mCtx = canvas.getContext('2d')
                mCtx.drawImage(img, 0, 0, 640, 1236)
                mCtx.save()
                //画下雷达图
                var imagine=score[0].value*20
                var explore=score[1].value*20
                var live=score[2].value*20
                var create=score[3].value*20
                var decide=score[4].value*20
                var mW = 640
                var mH = 300
                var mData = [['决策力',imagine],['创造力',create],['生命力', live],['探索力', explore],['想象力', imagine]] //修改对应数值即可改变三角形形状
                var mCount = mData.length //边数
                var mCenter = mW / 2 //中心点
                var mRadius = mCenter - 50 //半径(减去的值用于给绘制的文本留空间)
                var mAngle = (Math.PI * 2 *(1/6)) / mCount//角度=2π/n
                var mColorPolygon = '#B8B8B8' //多边形颜色
                var mColorLines = '#B8B8B8' //顶点连线颜色
                var mColorText = '#000000' //文本颜色
                var mCtx2 = canvas.getContext('2d')
                mCtx2.fillStyle = '000'
                var x = 0
                var y = 0
                var width = 300
                var height = 300
                var angle = Math.PI / 6
                var rectCenterPoint = { x: x + width / 2, y: y + height / 2 } // 矩形中心点
                mCtx2.translate(rectCenterPoint.x, rectCenterPoint.y)
                // mCtx2.rotate(angle) //旋转角度
                mCtx2.translate(-rectCenterPoint.x, -rectCenterPoint.y)
                drawRegion(mCtx2,mData)
                drawCircle(mCtx2,mData)
                mCtx2.restore()
                var mCtx3 = canvas.getContext('2d')
                var img2 = document.getElementById('qrcode')
                mCtx3.drawImage(img2, 430, 860, 120, 120)
                var dataURL=canvas.toDataURL('image/jpeg'); //转换图片为dataURL
              that.resImg=dataURL
            }
             img.src = this.resultlist[maxindex]

       }
    }
}
        //绘制数据区域
        function drawRegion(ctx,mData) {
            var mCenter =408//中心点
            var hCenter =525
            var mCount = 5 //边数
            var mAngle = (Math.PI * 2) / mCount //角度=2π/n
            var mRadius = 100 //半径(减去的值用于给绘制的文本留空间)
            ctx.save()
            ctx.strokeStyle = '#ea0c20'
            // var mData = [['决策力',100],['创造力',100],['生命力', 100],['探索力', 100],['想象力', 100]] //修改对应数值即可改变三角形形状
            ctx.beginPath()
            ctx.lineTo(x, y)
            for (var i = 0; i < mCount; i++) {
                var x =
                    mCenter +
                    (mRadius * Math.cos(mAngle * i) * mData[i][1]) / 100
                var y =
                    hCenter +
                    (mRadius * Math.sin(mAngle * i) * mData[i][1]) / 100

                ctx.lineTo(x, y)
            }
            ctx.fillStyle = '#9df0f7'
            ctx.lineWidth = 2;
            ctx.fill()
            ctx.closePath()
            ctx.stroke()
            ctx.restore()
        }
        // 画点
        function drawCircle(ctx,mData) {
            ctx.save()
            var mCount = 5 //边数
            var mAngle = (Math.PI * 2 ) / mCount //角度=2π/n
            var mCenter =408//中心点
            var hCenter =525
            var mRadius = 100 //半径(减去的值用于给绘制的文本留空间)
            var r = 5
            for (var i = 0; i < mCount; i++) {
                var x =
                    mCenter +
                    (mRadius * Math.cos(mAngle * i) * mData[i][1]) / 100
                var y =
                    hCenter +
                    (mRadius * Math.sin(mAngle * i) * mData[i][1]) / 100

                ctx.beginPath()
                ctx.arc(x, y, r, 0, Math.PI * 2)
                ctx.fillStyle = '#308543'
                ctx.fill()
            }

            ctx.restore()
        }
</script>

<style scoped>

.canvas-warp{
    width:100%;
    height:100%;
    opacity: 0;
    position: absolute;
    animation: resultIn 0.5s linear forwards;
}
#testcanvas {
           width: 100%;
           height: 100%;
        }
@keyframes resultIn{
    from {
        transform:scale(0.5);
        opacity: 1;
    }
    to {
        opacity: 1;
    }
}
</style>
