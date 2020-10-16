<template>
  <div class="section page__galleries">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-blocks-qb5ljn1p9ul">
        <div class="ldio-t4qo1eyy1z">
          <div style="left:22px;top:22px;animation-delay:0s"></div>
          <div style="left:42px;top:22px;animation-delay:0.125s"></div>
          <div style="left:62px;top:22px;animation-delay:0.25s"></div>
          <div style="left:22px;top:42px;animation-delay:0.875s"></div>
          <div style="left:62px;top:42px;animation-delay:0.375s"></div>
          <div style="left:22px;top:62px;animation-delay:0.75s"></div>
          <div style="left:42px;top:62px;animation-delay:0.625s"></div>
          <div style="left:62px;top:62px;animation-delay:0.5s"></div>
        </div>
      </div>
    </loading>
    <CoolLightBox
        :items="items"
        :index="index"
        :effect="'fade'"
        @close="index = null">
    </CoolLightBox>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <span>- The Client Galleries</span>
          <h3>THE ART HAPPENS IN<br> RECOGNIZING THE
          MOMENTS<br> WHEN THE SETTING, SUBJECT AND MOOD ARE IN SYNC.
          </h3>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row client__group">
        <div class="col-12 col-md-2">
        </div>
        <div class="col-12 col-md-10">
            <a @click.prevent="index = 0" class="img">
              <img :src="items[0].src" alt="SIRENA & ERIC">
              <div class="client">
                <span>WEDDING <i class="fas fa-angle-right"></i> SIRENA & ERIC </span>
              </div>
            </a>
        </div>
        <div class="col-12 col-md-7">
            <a @click.prevent="index = 1" class="img">
              <img :src="items[1].src" alt="SIRENA & ERIC">
            </a>
        </div>
        <div class="col-12 col-md-5">
          <a @click.prevent="index = 2" class="img img_special_1">
              <img :src="items[2].src" alt="SIRENA & ERIC">
            </a>
        </div>
      </div>
      <div class="row client__group">
        <div class="col-12 col-md-9">
            <a @click.prevent="index = 3" class="img img__lg img_special_2">
              <img :src="items[3].src" alt="AMY & TOM">
              <div class="client">
                <span>WEDDING <i class="fas fa-angle-right"></i> AMY & TOM </span>
              </div>
            </a>
        </div>
        <div class="col-12 col-md-3">
        </div>
        <div class="col-12 col-md-1">
        </div>
        <div class="col-12 col-md-4">
          <a @click.prevent="index = 4" class="img">
            <img :src="items[4].src" alt="AMY & TOM">
          </a>
        </div>
        <div class="col-12 col-md-7">
            <a @click.prevent="index = 5" class="img img_special_3">
              <img :src="items[5].src" alt="AMY & TOM">
            </a>
        </div>
      </div>

      <div class="row client__group">
        <div class="col-12 col-md-6">
            <a @click.prevent="index = 6" class="img img_special_4">
              <img :src="items[6].src" alt="MAHID FAMILY">
              <div class="client">
                <span>MATERNITY & FAMILY <i class="fas fa-angle-right"></i> MAHID FAMILY </span>
              </div>
            </a>

        </div>
        <div class="col-12 col-md-4">
          <a @click.prevent="index = 7" class="img img_special_5">
              <img :src="items[7].src" alt="MAHID FAMILY">
            </a>
        </div>
        <div class="col-12 col-md-2">
        </div>
        <div class="col-12 col-md-3">
        </div>
        <div class="col-12 col-md-9">
            <a @click.prevent="index = 8" class="img img__lg">
              <img :src="items[8].src" alt="MAHID FAMILY">
            </a>
        </div>
      </div>

      <div class="row client__group">
        <div class="col-12 col-md-9">
            <a @click.prevent="index = 9" class="img img_special_2">
              <img :src="items[9].src" alt="KATE & JON">
              <div class="client">
                <span>WEDDING <i class="fas fa-angle-right"></i> KATE & JON</span>
              </div>
            </a>
        </div>
        <div class="col-12 col-md-3">
        </div>
        <div class="col-12 col-md-1">
        </div>
        <div class="col-12 col-md-4">
          <a @click.prevent="index = 10" class="img img_special_6">
            <img :src="items[10].src" alt="KATE & JON">
          </a>
        </div>
        <div class="col-12 col-md-7">
            <a @click.prevent="index = 11" class="img">
              <img :src="items[11].src" alt="KATE & JON">
            </a>
        </div>
      </div>

      <div class="row client__group">
        <div class="col-12 col-md-2">
        </div>
        <div class="col-12 col-md-10">
            <a @click.prevent="index = 12" class="img img_special_4">
              <img :src="items[12].src" alt="LITTLE ZOEY">
              <div class="client">
                <span>CHILDREN <i class="fas fa-angle-right"></i> LITTLE ZOEY </span>
              </div>
            </a>
        </div>
        <div class="col-12 col-md-7">
            <a @click.prevent="index = 13" class="img img_special_4">
              <img :src="items[13].src" alt="LITTLE ZOEY">
            </a>
        </div>
        <div class="col-12 col-md-5">
          <a @click.prevent="index = 14" class="img img_special_7">
              <img :src="items[14].src" alt="LITTLE ZOEY">
            </a>
        </div>
      </div>

      <div class="row client__group">
        <div class="col-12 col-md-9">
            <a @click.prevent="index = 15" class="img img__lg img_special_4">
              <img :src="items[15].src" alt="JENIFFER">
              <div class="client">
                <span>PORTRAIT <i class="fas fa-angle-right"></i> JENIFFER </span>
              </div>
            </a>
        </div>
        <div class="col-12 col-md-3">
        </div>
        <div class="col-12 col-md-1">
        </div>
        <div class="col-12 col-md-4">
          <a @click.prevent="index = 16" class="img img_special_4">
            <img :src="items[16].src" alt="JENIFFER">
          </a>
        </div>
        <div class="col-12 col-md-7">
            <a @click.prevent="index = 17" class="img img_special_3">
              <img :src="items[17].src" alt="JENIFFER">
            </a>
        </div>
      </div>

      <div class="row client__group">
        <div class="col-12 col-md-7">
            <a @click.prevent="index = 18" class="img img_special_4">
              <img :src="items[18].src" alt="ROSCOE">
              <div class="client">
                <span>PET <i class="fas fa-angle-right"></i> ROSCOE </span>
              </div>
            </a>

        </div>
        <div class="col-12 col-md-5">
          <a @click.prevent="index = 19" class="img img_special_5">
              <img :src="items[19].src" alt="ROSCOE">
          </a>
        </div>
        <div class="col-12 col-md-2">
        </div>
        <div class="col-12 col-md-10">
            <a @click.prevent="index = 20" class="img img__lg img_special_7">
              <img :src="items[20].src" alt="ROSCOE">
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galleries',
  data() {
    return {
      isLoading: false,
      fullPage: true,

      items: [
        {
          title: 'SIRENA & ERIC',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Ze1Siisu1hvdBztGkJoSLDtaYR0hEibhCgqNT1oqeYo62wSYqwWdyfCdLprqv8K7frz5fK17KKoZDCdT4S6ny2Qc2x0OLzrMbD1zmqVfuGrisncEqz8LDcV2yvbiJ0tT.jpeg',
        },
        {
          title: 'SIRENA & ERIC',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Y8WmjPBBnSDTAnqPbHaMwDlnFQiUwXJ9xrSDeYG2X84cWe7NiB92OEOQKyPP0yXdm2E1nDfVINjE9LRMqUVE5TjDzhWrAp9M2LOCYUEFWsm9VmrVdx4k0PxCJBDAUxub.jpeg',
        },
        {
          title: 'SIRENA & ERIC',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/3LGuPQysFyV7K27p3UIzZeRm8QaO5Z1d2pMR1wtvnnSA79zgpmJfrueEvFGsDS1ZMqMOnTPlL92pgz5SLYFylJXJtdEakKGqkBsoTMOxLSMHaikPVODQ27dY0bu27kwF.jpeg',
        },
        {
          title: 'AMY & TOM',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/kXtD6698uE3OjxSx4ma9MKQsfIgoNBPWsfe1LxDDqNQDiNq2McHcMM97JCKAKHYHhCkzweTG4ZB23gMUTINymXu0zx60Uqs9Eyq5NU9vwjBfwTF9PMr3wgc9sUgkatNx.jpeg',
        },
        {
          title: 'AMY & TOM',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/SvuOxP7UTAk6OXSnTbc4K4A2dlY4rYLRuawtKn9gBZ9mEG40QKAEjsLxM7p8KxfvVU9yUmH7i1skagvBNx7ZWcApYkMsPPIgSqLeSBZ1UGkfq0EIAHEG7tmGNpLNrqKD.jpeg',
        },
        {
          title: 'AMY & TOM',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/EyabSAWkY0qRR8M3tWU24skncJm1p7EQs5wBGHdTEQMTyjzsrNXQDt26FOKKDlouEYUprhBcDxJZkfeuOtegvjRHW3JnjF2UbyPjuvnXZwncWQ2wMZu7rf8b6xcNlRhD.jpeg',
        },
        {
          title: 'MAHID FAMILY',
          description: 'MATERNITY & FAMILY',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/NY3AadggkvVJ2n7bVoGukNZHXOnh9j22037H4dBzPDzX4DOCmYEFqdUb1HhCQ3licrtzCDbHcbswtZ7ltuUz4p7rl7kj4VgPeTJFZ0LbtPjQhXxk1JL1LDB6ZLvPKspy.jpeg',
        },
        {
          title: 'MAHID FAMILY',
          description: 'MATERNITY & FAMILY',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/VAwdpBXHuiNC3V8NAah467FnoIcaDegB4pts62b24VBAa3L9P4TBLQzrFYxtEpK35VK0RJ9vUe9s5f8kM2n3LD07nuTkPzdArZhINFzm9TBKZvdG3fJSHM9shOqeamZs.jpeg',
        },
        {
          title: 'MAHID FAMILY',
          description: 'MATERNITY & FAMILY',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/jfXi9T22xK8QboeblNNSiXkVH8jxlcY8yqHIPqOPd1QBhg66WNH393k4h8peR7tX8shDUdQLFIuRa28nS1AJJAy16MuW0ACAPkmmBIyGmTB7sH9ygn3nmaZC3drX7r5x.jpeg',
        },
        {
          title: 'KATE & JON',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/w053Cj8X2GahZkENRwXRQ8zu9kVET9u0CffxpGKtZHL8pidooZgWdv1DfQZ2cTQEyoE81AHtlS65iwMDVYczGbgu4BP62Fgye6zUkXF9MoMuJ9oNzGt8kGQit9FdMzYS.jpeg',
        },
        {
          title: 'KATE & JON',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/TMtkWLBdNwWn4pPVRjQnFxsE5ouHMFZtobH5FNhU8hGObH632WK9RN8PzW9IpNOZB5ZXpxtgvOmTgBdYkHKw43DgchGfr00o4ScrgZaoUzW2jUpDZUVabP4f1KgXUZfi.jpeg',
        },
        {
          title: 'KATE & JON',
          description: 'WEDDING',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/6zdOzTzQlLT4Wp2lpRqobxmEnB8B69K9M4jnaeK0NDAM1cGgxuLsvVGjoL9Aytel62FKshq6VI2wUIj9xBhvTNHifG8ng2mJHERfFODyhfSDPTtBYTZIQhFf509uLPej.jpeg',
        },
        {
          title: 'LITTLE ZOEY',
          description: 'CHILDREN',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/zr8z6PsbDasYEx0HqkWDSCpO9046BHl8mAaiWlh1aKELa1cFFIrmRQb4YpteO5xJdCcsOvaHvYdtVEt9j8XMD0mU02u9Vh559FHTrvlcpWwfPF3KzoJ2qBbnXFHTONY1.jpeg',
        },
        {
          title: 'LITTLE ZOEY',
          description: 'CHILDREN',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/e7TpMmaEHS3xw1IWHgiFxh3qgHEG1r3CcSKYFQemms3qeDM7nU5sqkSIRj5AoYuqD6IcUghnwTEodoWuMxCdpAlqRErPkZ2mP5Noap1OQuvO0y1KrgG2bIpHxAeyfSdW.jpeg',
        },
        {
          title: 'LITTLE ZOEY',
          description: 'CHILDREN',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/FKnsU4pojt6QktJfroqR8zcVXp38EDVnZBNDY3j9tq1KuH101UWDGJpP7RNllEb2UPCrHO2AYayogmgC0DulqRyh5CE4Huyi1KEyx6CHmjnsgYN0pEuinZQEDCIhOSuL.jpeg',
        },
        {
          title: 'JENIFFER',
          description: 'PORTRAIT',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/UkEsv4DPndT8WPIbLWC0Z4qtlFspjFHt7o0iubia16A60kaoVRl11PHth1C8P5GKEtZBqrTK45jCzgTKjLMigm3Mgj2pYC1mqO9OTuC2HiO1i6aABeBOGHI9eZIGDG4w.jpeg',
        },
        {
          title: 'JENIFFER',
          description: 'PORTRAIT',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/EbvNtr9tS7E8fUbgPHLiFWLqVPb2t3cGxI8hPJ0Snxr8KctJO73c5CWTictPZezQnyWzknDQej1a8AOA2NOgtyX4esc8usUN5eCut9CLzonSNzfZBHKlaz1eD0fyUlEa.jpeg',
        },
        {
          title: 'JENIFFER',
          description: 'PORTRAIT',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/MP2K0Thbch2IXf9UtHpkjxaDvRsyTbdxq7jhdTJXHSw8r32BYABowPKFpLFzuneIO6XdGlrXv9DotAv7Ps1IOK1N1gx9YAvGdRczcF7JXTrwHn0DTy7DK7etHLfSZFsG.jpeg',
        },
        {
          title: 'ROSCOE',
          description: 'PET',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/SnkrrfDmZ15tzqQAEEq7hkFsvHEVioxOI6CsUbsQjhGxKfqNnWmI2YyP1Q4GAdF3khUblK27q7TIO37xfsJ4gqLIfspjiD5m5SXHq1A0LrzWcsjvqrQcnu4m8YmLzQXN.jpeg',
        },
        {
          title: 'ROSCOE',
          description: 'PET',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/NT86mF7VIEeAXHHiAUG6zQlKSojeruluXTXnrwhUHEUIPRmA4LZfxdRThtfFqcx67OtF1jUGNFUjmE5ztML9LFwNS33amjfk9bjKV4EcWBSWBXXe51frGIx9C0y5ywKx.jpeg',
        },
        {
          title: 'ROSCOE',
          description: 'PET',
          src: 'https://hexschool-api.s3.us-west-2.amazonaws.com/custom/QR9bkkgEG5VW8Mr0OTSyINMeRH7BYA6jegO8lXqRS0ozi0e8OQo6k2zo4Y1FeMVyHi0JUFOa9So44HYEaK9OVYVuTHmbYbneXoynnwRXr4WTgEi4vJAF9RJPBWUKZBFD.jpeg',
        },
      ],
      index: null,
    };
  },

  created() {
    this.isLoading = true;
    this.timeout = setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    clearTimeout(this.timeOutProcessId);
  },

};
</script>
