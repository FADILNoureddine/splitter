export default function Tables() {
  return (
    <div className="">
          <main className="">
            <div className="mt-8 flow-root">
              <div className="overflow-auto h-[50rem]">
                <div className="inline-block min-w-full align-middle sm:px-6 lg:px-0">
                  <table
                    table
                    className="min-w-full divide-y divide-gray-300 border"
                  >
                    <thead className="bg-slate-300 sticky -top-px">
                      <tr>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Order
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 "
                        >
                          Column Name
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Data Type
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Char Max
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Is Nullable
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Is Identity
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Default
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Example
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Referential
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Is Required
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          transco_nex6
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          transco_sap
                        </th>
                        <th
                          scope="col"
                          className="whitespace-nowrap py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Available Operations
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          data_template
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          255
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          mybu.mission.affair_phase.insert
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          DataProcess Template Name
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          template_required
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          data_source
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          20
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          NEX6
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          DataProcess Source
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          template_required
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          id
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          integer
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ID is generated for Insert / Required for Update
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          label
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          255
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          AffairPhase label
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_name
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          qpi
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          30
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          'qpi.1'::character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Transco : ProjectQualificationIndex
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ProjectQualificationIndex
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_generalengagementlevelcode
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-IQP
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          legal_entity
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          {" "}
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          5
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          SAP Code of the entity that carries the Affair_phase
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_legalaltenentityid
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSAS-BURKS
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          invoicing_entity
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          5
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          SAP Code of the entity that invoices
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_billinglegalentityid
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-BUKRS_FAC
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          type
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          30
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          'affair_phase.tm'::character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Transco : AffairPhaseType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          AffairPhaseType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_engagementcode
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          creation_date
                        </td>
                        <td className="text-ellipsis overflow-hidden px-3 py-4 text-sm text-gray-500">
                          timestamp without time zone
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          2023-06-27 10:11:01.511084+01
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          AffairPhase creation date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          last_update
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          timestamp without time zone
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          2023-06-27 10:11:01.511084+01
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Last update date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">11</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          user_update
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          100
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Last user update
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          version
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          integer
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          version is generated
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">12</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          affair
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          integer
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          MyBU FK : mission.affair.id
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">13</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          forecast_end_date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_project.alten_enddate
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-ENDDA
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">14</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          order_end_date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          not_applicable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">15</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ptf_end_date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          not_applicable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">16</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ctrl_export
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          boolean
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ?
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_isexportationcontrol
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">17</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          billing_type
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          'billing_type.fixed_price'::character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Transco : BillingType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          BillingType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_billingtypecode
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-PRART
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">18</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          affair_phase_status
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          0
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Transco : AffairPhaseStatus
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          AffairPhaseStatus
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-STATUT_SAP
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">19</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          confidentiality
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          10
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ?
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_confidentialitylevelcode
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-CONF
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">20</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          created_by
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          AffairPhase Creator name
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">21</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          anu
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          boolean
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Alten * GmbH specificity
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_anu
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-ANU{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">22</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          first_start_date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Affair Phase Initial Start Date
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">23</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          sas_id
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          SAS : Project ID
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          sas_specific
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          alten_projectbackofficeid
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-PSPID{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">24</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          nbr_mission
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          integer
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Field computed by batch (1x/d 02h00)
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          computed
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">25</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          opportunity
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          SalesForce.Opportunity.Id
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          crm_specific
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">26</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          sub_type_internal_project
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          100
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Transco : InternalProjectSubType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          InternalProjectSubType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-INTERNE
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">27</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          sub_type_service
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          100
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Transco : ServiceSubType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ServiceSubType
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">28</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          customer_group_entity
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          integer
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          MyBU : mission.site.id d'un site de type site.msi ou
                          site.internal_project. Rempli uniquement quand le type
                          de phase affaire est affair_phase.msi ou
                          affair_phase.internal_project.
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-KUNNR_FIN
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">29</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          cir
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          boolean
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">30</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          linked_affair_phase
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          integer
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          not_applicable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">31</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          legacy_id
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          100
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          LEGACY ID
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          fillable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          Integration Key
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          ZSASP-PSPID
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">32</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          migso
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          boolean
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          not_applicable
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">33</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          customer_legal_entity
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          SalesForce.LegalEntity__c.Id (main org unit)
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          crm_specific
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">34</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          contact
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          SalesForce.Contact.Id
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          crm_specific
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">35</th>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          customer
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          character varying{" "}
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          50
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          true
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          SalesForce.Account.Id
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          false
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          crm_specific
                        </td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500"></td>
                        <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                          <a href="#" class="btn btn-success">
                            Insert
                          </a>
                          <a href="#" class="btn btn-success">
                            Update
                          </a>
                          <a href="#" class="btn btn-success">
                            Upsert
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot className="bg-slate-300 relative bottom-0 right-0">
                      <tr>
                        <th className=" whitespace-nowrap text-left text-sm font-semibold text-gray-900">
                          All values
                        </th>
                        <th className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                          System values
                        </th>
                        <th className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                          Custom values
                        </th>
                        <th className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                          Operations
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
  )
}
