<template>
  <div class="container-fluid">
    <div class="row mb-5">
      <div class="col-lg-7">
        <img src="../../public/product (1).svg" alt />
        <b class="fs-22 pl-2">Production House</b>
      </div>
      <div class="col-lg-5">
        <div class="d-flex justify-content-end">
          <div class="dropdown">
            <button
              class="btn btn-info dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Categories</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div class="input-group search-form ml-3">
            <div class="input-group-prepend pl-3 pt-2">
              <img src="../../public/magnifying-glass.svg" height="19px" alt />
            </div>
            <input class="form-control" type="text" />
            <div class="input-group-append pt-1 pr-2">
              <a href="#">
                <small class="fc-gy fs-12">X</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-5">
        <ul class="nav nav-tabs production-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active pl-0" href="#all" role="tab" data-toggle="tab">
              <small class="fs-16">All Production</small>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#awaiting" role="tab" data-toggle="tab">
              <small class="fs-16 border-left pl-lg-4">Awaiting Production</small>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#completed" role="tab" data-toggle="tab">
              <small class="fs-16 border-left pl-lg-4">Completed</small>
            </a>
          </li>
          <div class="ml-auto">
            <div class="d-flex justify-content-end">
              
              <button class="btn btn-white">Print Worksheet</button>
              <div class="mx-3">
                <select name id class="form-select">
                  <option value>Mark as complete</option>
                  <option value>Mark as ongoing</option>
                </select>
              </div>
              <button class="btn btn-grey px-4">Save</button>
            </div>
          </div>
        </ul>
      </div>
      <div class="col-12 px-0">
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="all">
            <div class="row">
              <div class="col-12">
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
                      <th>Order #</th>
                      <th>Item #</th>
                      <th>Details</th>
                      <th>Colors</th>
                      <th>Qty</th>
                      <th>Print Type</th>
                      <th>Delivery Method</th>
                      <th>Delivery Time</th>
                      <th>Production Status</th>
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
                        <td>
                          <p class="fs-13">#232JODJSDKN2</p>
                        </td>
                        <td style="width: 17%;">
                          <div class="d-flex">
                            <img src="../../public/shirt.png" height="40px" alt />
                            <p
                              class="fs-12"
                            >No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</p>
                          </div>
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
                          <p class="fs-13">
                            <b>DTG Print</b>
                          </p>
                        </td>
                        <td>
                          <p class="fc-bl fs-13">Pickup Order</p>
                        </td>
                        <td>
                          <p class="fs-13 m-0">23 - June - 2019</p>
                          <p class="fs-13">
                            <span class="fc-gy">Time Left</span>
                            <span class="fc-gn">10:00:00</span>
                          </p>
                        </td>
                        <td>
                          <p class="fc-gn fs-13 text-center">
                            Running
                            <br />2 of 5
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="awaiting"></div>
          <div role="tabpanel" class="tab-pane" id="completed"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoorder() {
      router.push({ path: '/order' })
    }
  }
};
</script>