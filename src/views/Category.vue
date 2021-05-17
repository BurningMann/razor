<template>
  <div>
    <div class="catalog">
      <div 
      v-for="product in filtredProducts"
      :key="product.id"
      class="catalog__element" 
      >
        <img src="@/assets/pc-img.png" :alt="product.title">
        <span class="title">{{product.title}}</span>
        <div class="conf_wrapper">
          <p>Выберите тип конфигуратора:</p>
          <div class="conf_element">
            <span class="conf_title">ПРОЦЕССОР:</span>
            <p class="conf_name">{{product.cpu.name}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ОПЕРАТИВНАЯ ПАМЯТЬ:</span>
            <p class="conf_name">{{product.ram}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ВИДЕОКАРТА:</span>
            <p class="conf_name">{{product.gpu.name}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">СИСТЕМНЫЙ SSD:</span>
            <p class="conf_name">{{product.ssd}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">НАКОПИТЕЛЬ 2:</span>
            <p class="conf_name">{{product.sdd}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ГАРАНТИЯ:</span>
            <p class="conf_name">{{product.garancy}}</p>
          </div>
        </div>
        <router-link 
          tag="div" 
          :to = "{
            name: 'Product', 
            params: {
              product: product.url
            }
          }" 
        >
        <a href="#" class="btn">Подробнее</a>
        </router-link>
      </div>
    </div>
    <div class="text_box">
          <h3>Гарантия на игровые компьютеры DigitalRazor PROGAMING</h3>
          <p>
            Базовая гарантия для компьютеров серии ProGaming составляет 24 месяца. Данная гарантия включает в себя высококвалифицированную техническую и сервисную поддержку. Наши менеджеры всегда готовы оказать консультационную поддержку с установкой и настройкой оборудования.
          </p>
          <p>
            В гарантияю входит:<br/>
            - Удаленная техническая и сервисная поддержка в течении 24 месяцев<br/>
            - Горячая замена некоторых компонентов у клиента<br/>
            - Бесплатная доставка до СЦ и обартно для Санкт-Петербурга и Москвы в течении 24 месяцев<br/>
            - Компенсация половины стоимости доставки до СЦ и обратно для других городов в течении 24 месяцев<br/>
            - Ускореная замена вышедших из строя компонентов в течении 3 рабочих дней в СЦ на новые<br/>
            - Возможность увеличить гарантийный срок до 36 месяцев<br/>
          </p>
          <p>
            В случае, если компьютер вышел из строя в первый месяц после получаения, доставка до СЦ и обратно осуществляется за наш счет для всей России с моментальной заменой компонентов на новые в СЦ в течении 1 дня.
          </p>
    </div>
  </div>
</template>

<script>
var filter_list = null
export default {
  data: () => ({
    products: [
      {id:1,title:"PROGAMING M", cpu: {type:"Intel",name:"4-ядерный Intel Core i3-10100F 3.60 GHz"}, ram: "16GB (2x8Gb) DDR4 2666Mhz", gpu: {type:"NVIDIA",name:"NVIDIA GeForce GTX 1660 Super 6G"}, ssd: "SSD M.2 240GB", sdd: "Жесткий диск 1TB", garancy: "24 месяца",url:"progaming-m"},

      {id:2,title:"PROGAMING S", cpu: {type:"Intel",name:"4-ядерный Intel Core i3-10105F 3.70 GHz"}, ram: "16GB (2x8Gb) DDR4 2666Mhz", gpu: {type:"NVIDIA",name:"NVIDIA GeForce GTX 1660 Super 6G"}, ssd: "SSD M.2 240GB", sdd: "Жесткий диск 1TB", garancy: "24 месяца",url:"progaming-s"},

      {id:3,title:"PROGAMING M", cpu: {type:"Intel",name:"4-ядерный Intel Core i3-10100F 3.60 GHz"}, ram: "16GB (2x8Gb) DDR4 2666Mhz", gpu: {type:"NVIDIA",name:"NVIDIA GeForce GTX 1660 Super 6G"}, ssd: "SSD M.2 240GB", sdd: "Жесткий диск 1TB", garancy: "24 месяца",url:"progaming-m"},

      {id:4,title:"PROGAMING AORUS", cpu: {type:"AMD",name:"6-ядерный AMD Ryzen 5 3600X 3.80 GHz"}, ram: "16GB (2x8Gb) DDR4 2666Mhz", gpu: {type:"AMD",name:"AMD RADEON RX 6700XT 12G"}, ssd: "SSD M.2 240GB", sdd: "Жесткий диск 1TB", garancy: "24 месяца",url:"progaming-AORUS"},

      {id:5,title:"PROGAMING X", cpu: {type:"Intel",name:"6-ядерный Intel Core i5-11600KF 3.9 GHz"}, ram: "16GB (2x8Gb) DDR4 3000Mhz", gpu: {type:"NVIDIA",name:"NVIDIA GeForce RTX 3070 8GB"}, ssd: "SSD M.2 240GB", sdd: "Жесткий диск 1TB", garancy: "24 месяца",url:"progaming-x"},

      {id:6,title:"PROGAMING CORSAIR", cpu: {type:"AMD",name:"6-ядерный AMD Ryzen 5 5600X 3.70 GHz"}, ram: "16GB (2x8Gb) DDR4 3200Mhz", gpu: {type:"NVIDIA",name:"NVIDIA GeForce RTX 3070 8GB"}, ssd: "SSD M.2 480GB", sdd: "Жесткий диск 1TB", garancy: "24 месяца",url:"progaming-CORSAIR"},

      {id:7,title:"PROGAMING MSI", cpu: {type:"AMD",name:"6-ядерный AMD Ryzen 5 3600 3.60 GHz"}, ram: "16GB (2x8Gb) DDR4 2666Mhz", gpu: {type:"AMD",name:"MSI Radeon RX 6800 XT GAMING X TRIO 16G"}, ssd: "M.2 NVMe 500GB", sdd: "Жесткий диск 2TB Seagate IronWolf Pro", garancy: "24 месяца",url:"progaming-MSI"},
    ],
  }),
  computed:{
    filtredProducts() {
      filter_list = this.$store.state.filterList
      return this.products.filter((item) => {
          return  (filter_list.cpu.length === 0 || filter_list.cpu.includes(item.cpu.type)) &&
                  (filter_list.gpu.length === 0 || filter_list.gpu.includes(item.gpu.type))
      })
    }       
  },
}
</script>

<style scoped lang="scss">
  .catalog{
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    .catalog__element{
      width: calc(33.333% - 40px);
      margin: 20px;
      color: #fff;
      background: #0b1015;
      padding: 20px;
      .title{
        font-weight: bold;
        font-size: 30px;
        
      }
      .conf_wrapper{
        display: flex;
        flex-direction: column;
        .conf_element{
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid rgba(79,89,102,.2);
        }
        .conf_title{
          font-size: 11px;
          color: #66788c;
        }
        .conf_name{
          font-size: 14px;
          margin: 7px 0;
        }
      }
      .btn{
        widows: 90%;
        margin: 20px auto 0;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .text_box{
    color: #fff;
    padding: 20px;
  }
</style>
