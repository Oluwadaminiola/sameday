<template>
  <div class="container-fluid">
    <div class="row">
      <!-- production -->
      <div class="col-12 mb-4">
        <router-link to="/" class="border-right pr-2">
          <button class="btn btn-back">
            <i class="fas fa-arrow-left"></i>
          </button>
          <small class="ml-2 fc-gy">Back</small>
        </router-link>
        <img src="../../public/product (1).svg" class="ml-2" alt />
        <b class="fs-22 pl-2">Production House</b>
      </div>

      <!-- production -->

      <!-- order -->
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <div>
            <b class="fs-18">Order: #ADJ2322434D</b>
            <p>
              <small class="fc-bl fs-14">Account Setup > Delivery Method</small>
            </p>
          </div>
          <div class="pt-4">
            <p class="text-right">
              <span class="fc-bl fs-14">Production Status</span>
              <span class="fc-gn fs-15 pl-2">
                <b>Running 2 of 4</b>
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- order -->

      <!-- order-details -->
      <div class="col-12 mb-4">
        <div class="order-details">
          <div class="row">
            <div class="col pt-3">
              <div class="d-flex">
                <img src="../../public/shopping-cart (1).svg" height="20px" alt />
                <div class="pl-2">
                  <p>
                    <b class="fs-16">Order Value</b>
                  </p>
                  <p class="fc-bl fs-15">$40,000</p>
                </div>
              </div>
            </div>
            <div class="col pt-3">
              <p>
                <b class="fs-16">Order Date</b>
              </p>
              <p class="fc-bl fs-15">25 - June - 2017</p>
            </div>
            <div class="col pt-3">
              <p>
                <b class="fs-16">Delivery Method</b>
              </p>
              <p>
                <span class="fc-bl fs-13">Pickup Order</span>
              </p>
            </div>
            <div class="col pt-3">
              <p>
                <b class="fs-16">Rush Option</b>
              </p>
              <p class="fc-bl fs-15">Rush</p>
            </div>
            <div class="col pt-3">
              <p>
                <b class="fs-16">Status</b>
              </p>
              <p class="fc-bl fs-15">Pending</p>
            </div>
            <div class="col">
              <p>
                <b class="fs-16">Requested By</b>
              </p>
              <p class="fc-bl fs-15">25 - June - 2017</p>
              <p class="fs-13">
                <span class="fc-gy pr-2">Time Left</span>
                <span class="fc-gn">
                  <b>10:00:00</b>
                </span>
              </p>
            </div>
            <div class="col pt-2">
              <p>
                <b class="fs-16">Shipped or Picked Date</b>
              </p>
              <p class="fc-bl fs-15">25 - June - 2017</p>
            </div>
          </div>
        </div>
      </div>
      <!-- order-details -->

      <div class="col-12 mb-5">
        <div class="order-tab">
          <div class="row">
            <!-- tab -->
            <div class="col-12 px-lg-0 pt-4">
              <ul class="nav nav-tabs production-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active pl-3"
                    href="#productdetails"
                    role="tab"
                    data-toggle="tab"
                  >
                    <small class="fs-16">Product Details</small>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pl-0" href="#history" role="tab" data-toggle="tab">
                    <small class="fs-16 border-left pl-lg-4">History / Notes</small>
                  </a>
                </li>

                <div class="ml-auto">
                  <div class="d-flex justify-content-end">
                    <div class="mx-3">
                      <div class="btn-group">
                        <a class="dropdown-toggle d-inline fc-gn" data-toggle="dropdown">
                          <b class="fc-gn fs-14">Worksheet</b>
                        </a>
                        <ul class="dropdown-menu worksheet">
                          <li class="px-1 pt-2 text-center">
                            <a href="javascript:void(0);" class="border-bottom px-4 pb-2">Worksheet</a>
                          </li>
                          <li class="px-1 py-2 text-center">
                            <a href="javascript:void(0);">Invoice Order</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button class="btn btn-grey px-4 mx-2">Print</button>
                    <button class="btn btn-white mx-2">
                      <img src="../../public/file (1).svg" height="16px" alt /> Add Note
                    </button>

                    <div class="ml-2">
                      <select name id class="blue-selectform">
                        <option value>Complete Production</option>
                        <option value>
                          <i class="fas fa-adjust"></i> Partial Production
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <!-- tab -->

            <div class="col-12 px-lg-0">
              <div class="tab-content">
                <!-- product tab -->
                <div role="tabpanel" class="tab-pane active" id="productdetails">
                  <div class="row">
                    <div class="col-12 px-lg-0 mt-4">
                      <div class="bg-grey py-3 px-3">
                        <b class="fs-16">Product</b>
                      </div>
                    </div>

                    <div class="col-12 px-lg-0 pt-4 pb-2">
                      <div class="row">
                        <div class="col">
                          <p class="text-center">
                            <img src="../../public/shirt2.png" height="150px" alt />
                          </p>
                          <p class="fs-15 text-center">
                            <b>Front</b>
                          </p>
                        </div>
                        <div class="col">
                          <p class="text-center">
                            <img src="../../public/shirt1.png" height="150px" alt />
                          </p>
                          <p class="fs-15 text-center">
                            <b>Back</b>
                          </p>
                        </div>
                        <div class="col">
                          <p class="text-center">
                            <img src="../../public/shirt2.png" height="150px" alt />
                          </p>
                          <p class="fs-15 text-center">
                            <b>Side</b>
                          </p>
                        </div>
                        <div class="col">
                          <p class="text-center">
                            <img src="../../public/shirt3.png" height="150px" alt />
                          </p>
                          <p class="fs-15 text-center">
                            <b>Side</b>
                          </p>
                        </div>
                        <div class="col"></div>
                        <div class="col"></div>
                      </div>
                    </div>

                    <div class="col-12 px-lg-0">
                      <div class="table-responsive">
                        <table class="table product-table">
                          <thead>
                            <th>
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="customControlAutosizing"
                                />
                                <label class="custom-control-label" for="customControlAutosizing"></label>
                              </div>
                            </th>
                            <th>Item #</th>
                            <th>Details</th>
                            <th>Production Type</th>
                            <th>Colors</th>
                            <th>Quantity</th>
                            <th>Paid</th>
                          </thead>
                          <tbody>
                            <tr @click="gotoorder()">
                              <td>
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="check1" />
                                  <label class="custom-control-label" for="check1"></label>
                                </div>
                              </td>
                              <td>
                                <p class="fs-13">#232JODJSDKN2</p>
                              </td>
                              <td style="width: 27%;">
                                <div class="d-flex">
                                  <img src="../../public/shirt.png" height="40px" alt />
                                  <p
                                    class="fs-12"
                                  >No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</p>
                                </div>
                              </td>
                              <td>
                                <p class="fc-rd fs-13">
                                  <b>DTG Print</b>
                                </p>
                              </td>
                              <td>
                                <span class="badge badge-blue fs-13">Royal</span>
                              </td>
                              <td>
                                <p class="fs-13">
                                  <b>L X 4</b>
                                </p>
                              </td>
                              <td>
                                <i class="fas fa-check-circle fc-gn fs-16"></i>
                                <small class="fc-gy fs-13 pl-2">Paid in full</small>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- product tab -->

                <!-- history tab -->
                <div role="tabpanel" class="tab-pane" id="history"></div>
                <!-- history tab -->
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    $(".dropdown-menu.worksheet li a").click(function() {
      var selText = $(this).text();
      var imgSource = $(this)
        .find("img")
        .attr("src");
      var img = '<img height="15px" class="mr-2" src="' + imgSource + '"/>';
      $(this)
        .parents(".btn-group")
        .find(".dropdown-toggle")
        .html(
          " " + '<span class="fs-14 fc-gn" ><b> ' + selText + " </b></span>"
        );
    });

    // $(".dropdown-menu li a").click(function() {
    //   var selText1 = $(this).text();
    //   var imgSource = $(this)
    //     .find("img")
    //     .attr("src");
    //   var img = '<img height="15px" class="mr-2" src="' + imgSource + '"/>';
    //   $(this)
    //     .parents(".btn-group")
    //     .find(".dropdown-toggle")
    //     .html(
    //       img +
    //         " " +
    //         '<span class="fs-14 fc-gn" > "' +
    //         selText1 +
    //         '" </span>' +
    //         ' <span><small class="pl-2"><i class="fas fa-chevron-down"></i></small></span>'
    //     );
    // });
  }
};
</script>