<template>
  <!-- <div> -->
  <!-- <topnav0></topnav0> -->
  <div id="china_map" style="width:100%;height:600px;">
    <!-- </div> -->
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
import axios from "axios";
var self = this;
export default {
  name: "distriMap",
  data() {
    return {
      chinachart: null,

      province: [
        "湖北",
        "广东",
        "浙江",
        "湖南",
        "河南",
        "安徽",
        "重庆",
        "山东",
        "江西",
        "四川",
        "江苏",
        "北京",
        "福建",
        "上海",
        "广西",
        "河北",
        "陕西",
        "云南",
        "海南",
        "黑龙江",
        "辽宁",
        "山西",
        "天津",
        "甘肃",
        "内蒙古",
        "新疆",
        "宁夏",
        "吉林",
        "贵州",
        "青海",
        "西藏",
        "澳门",
        "香港",
        "台湾"
      ],
      e_data: [
        67802,
        1508,
        1258,
        1019,
        1276,
        990,
        579,
        775,
        937,
        554,
        647,
        582,
        345,
        522,
        254,
        325,
        255,
        183,
        168,
        488,
        140,
        137,
        177,
        138,
        117,
        76,
        75,
        98,
        147,
        18,
        1,
        41,
        802,
        339
      ]
    };
  },
  methods: {
    mapInit() {
      var that = this;
      // 初始化echarts实例
      that.chinachart = echarts.init(document.getElementById("china_map"));
      // 进行相关配置
      var res = [];

      for (var j = 0; j < this.e_data.length; j++) {
        res.push({
          name: this.province[j],
          value: this.e_data[j]
        });
      }
      res.sort(function(a, b) {
        return a.value - b.value;
      });
      var res1 = [];
      var res2 = [];
      for (var t = 0; t < 10; t++) {
        res1[t] = res[res.length - 1 - t].name;
        res2[t] = res[res.length - 1 - t].value;
      }
      console.log(res1);
      console.log("----------------");
      console.log(this.province);

      var chartOption = {
        baseOption: {
          title: {
            //text: days[n] + "日  " + news[n],
            text: "Hello",
            textStyle: {
              color: "#2D3E53",
              fontSize: 28
            },
            left: 20,
            top: 20
          },
          tooltip: {
            show: true,
            formatter: function(params) {
              return params.name + "：" + params.value;
            }
          },
          // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
          visualMap: {
            type: "piecewise",
            pieces: [
              {
                min: 1002,
                color: "#73240D"
              },
              {
                min: 501,
                max: 1001,
                color: "#BB0000"
              },
              {
                min: 251,
                max: 500,
                color: "#BD430A"
              },
              {
                min: 101,
                max: 250,
                color: "#E08150"
              },
              {
                min: 11,
                max: 100,
                color: "#E9B090"
              },
              {
                min: 1,
                max: 10,
                color: "#F2DDD2"
              },
              {
                value: 0,
                color: "white"
              }
            ],
            orient: "vertical",
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],

            textStyle: {
              color: "#7B93A7"
            },
            bottom: "10%",
            left: "10%"
          },
          grid: {
            right: "5%",
            top: "20%",
            bottom: "10%",
            width: "20%"
          },
          xAxis: {
            min: 0,
            max: 4000,
            show: false
          },
          yAxis: [
            {
              inverse: true,
              offset: "2",
              type: "category",
              // data: "",
              nameTextStyle: {
                color: "#fff"
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                //rotate:45,
                textStyle: {
                  fontSize: 14,
                  color: "#000000"
                },
                interval: 0
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#333"
                }
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: "#333"
                }
              }
            }
          ],

          // geo配置详解： https://echarts.baidu.com/option.html#geo
          geo: {
            map: "china",
            right: "40%",
            left: "20%",
            label: {
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                areaColor: "#00FF00"
              }
            }
          },
          series: [
            {
              name: "mapSer",
              type: "map",
              map: "china",
              roam: false,
              geoIndex: 0,
              data: res,
              label: {
                show: false
              }
            },
            {
              name: "",
              type: "bar",
              zlevel: 2,
              barWidth: "40%",
              label: {
                normal: {
                  show: true,
                  fontSize: 14,
                  position: "right",
                  formatter: "{c}"
                }
              }
            }
          ]
        },
        animationDurationUpdate: 3000,
        animationEasingUpdate: "quinticInOut"
      };

      this.chinachart.setOption(chartOption);
      this.chinachart.on("click", function(params) {
        //点击事件
        if (params.componentType === "series") {
          var provinceName = params.name;
          // alert(provinceName)
          that.$router.push({
            path: "../page/supplyDetail",
            query: {
              province: provinceName
            }
          });
          console.log(provinceName)
        }
      });
    }
  },
  mounted() {
    this.mapInit();
  }
};
</script>

<style>
#china_map {
  margin-top: 20px;
}
</style>