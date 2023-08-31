import React from "react";

export default function Table() {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Order</th>
          <th>Column Name</th>
          <th>Data Type</th>
          <th>Char Max</th>
          <th>Is Nullable</th>
          <th>Is Identity</th>
          <th>Default</th>
          <th>Example</th>
          <th>Description</th>
          <th>Referential</th>
          <th>Is Required</th>
          <th>Type</th>
          <th>transco_nex6</th>
          <th>transco_sap</th>
          <th>Available Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>data_template</td>
          <td>character varying</td>
          <td>255</td>
          <td>false</td>
          <td>false</td>
          <td>mybu.mission.affair_phase.insert</td>
          <td>DataProcess Template Name</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>template_required</td>
          <td></td>
          <td></td>
          <td>
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
          <td>data_source</td>
          <td>character varying</td>
          <td>20</td>
          <td>false</td>
          <td>false</td>
          <td>NEX6</td>
          <td>DataProcess Source</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>template_required</td>
          <td></td>
          <td></td>
          <td>
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
          <td>id</td>
          <td>integer</td>
          <td></td>
          <td>false</td>
          <td>true</td>
          <td></td>
          <td>ID is generated for Insert / Required for Update</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>label</td>
          <td>character varying</td>
          <td>255</td>
          <td>false</td>
          <td>false</td>
          <td></td>
          <td>AffairPhase label</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>fillable</td>
          <td>alten_name</td>
          <td></td>
          <td>
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
          <td>qpi</td>
          <td>character varying</td>
          <td>30</td>
          <td>false</td>
          <td>false</td>
          <td>'qpi.1'::character varying</td>
          <td>Transco : ProjectQualificationIndex</td>
          <td></td>
          <td>ProjectQualificationIndex</td>
          <td>true</td>
          <td>fillable</td>
          <td>alten_generalengagementlevelcode</td>
          <td>ZSASP-IQP</td>
          <td>
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
          <td>legal_entity</td>
          <td> character varying</td>
          <td>5</td>
          <td>false</td>
          <td>false</td>
          <td></td>
          <td>SAP Code of the entity that carries the Affair_phase</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>fillable</td>
          <td>alten_legalaltenentityid</td>
          <td>ZSAS-BURKS</td>
          <td>
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
          <td>invoicing_entity</td>
          <td>character varying</td>
          <td>5</td>
          <td>false</td>
          <td>false</td>
          <td></td>
          <td>SAP Code of the entity that invoices</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>fillable</td>
          <td>alten_billinglegalentityid</td>
          <td>ZSASP-BUKRS_FAC</td>
          <td>
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
          <td>type</td>
          <td>character varying</td>
          <td>30</td>
          <td>false</td>
          <td>false</td>
          <td>'affair_phase.tm'::character varying</td>
          <td>Transco : AffairPhaseType</td>
          <td></td>
          <td>AffairPhaseType</td>
          <td>true</td>
          <td>fillable</td>
          <td>alten_engagementcode</td>
          <td></td>
          <td>
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
          <td>creation_date</td>
          <td>timestamp without time zone</td>
          <td></td>
          <td>false</td>
          <td>false</td>
          <td>2023-06-27 10:11:01.511084+01</td>
          <td>AffairPhase creation date</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>last_update</td>
          <td>timestamp without time zone</td>
          <td></td>
          <td>false</td>
          <td>false</td>
          <td>2023-06-27 10:11:01.511084+01</td>
          <td>Last update date</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>user_update</td>
          <td>character varying</td>
          <td>100</td>
          <td>false</td>
          <td>false</td>
          <td></td>
          <td>Last user update</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>version</td>
          <td>integer</td>
          <td></td>
          <td>false</td>
          <td>true</td>
          <td></td>
          <td>version is generated</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>affair</td>
          <td>integer</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>MyBU FK : mission.affair.id</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>forecast_end_date</td>
          <td>date</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>fillable</td>
          <td>alten_project.alten_enddate</td>
          <td>ZSASP-ENDDA</td>
          <td>
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
          <td>order_end_date</td>
          <td>date</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>not_applicable</td>
          <td></td>
          <td></td>
          <td>
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
          <td>ptf_end_date</td>
          <td>date</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>not_applicable</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
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
          <td>ctrl_export</td>
          <td>boolean</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td>false</td>
          <td>?</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>fillable</td>
          <td>alten_isexportationcontrol</td>
          <td></td>
          <td>
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
          <td>billing_type</td>
          <td>character varying</td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td>'billing_type.fixed_price'::character varying</td>
          <td>Transco : BillingType</td>
          <td></td>
          <td>BillingType</td>
          <td>false</td>
          <td>fillable</td>
          <td>alten_billingtypecode</td>
          <td>ZSASP-PRART</td>
          <td>
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
          <td>affair_phase_status</td>
          <td>character varying</td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td>0</td>
          <td>Transco : AffairPhaseStatus</td>
          <td></td>
          <td>AffairPhaseStatus</td>
          <td>false</td>
          <td>fillable</td>
          <td></td>
          <td>ZSASP-STATUT_SAP</td>
          <td>
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
          <td>confidentiality</td>
          <td>character varying </td>
          <td>10</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>?</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>fillable</td>
          <td>alten_confidentialitylevelcode</td>
          <td>ZSASP-CONF</td>
          <td>
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
          <td>created_by</td>
          <td>character varying</td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>AffairPhase Creator name</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>anu</td>
          <td>boolean</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>Alten * GmbH specificity</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>fillable</td>
          <td>alten_anu</td>
          <td>ZSASP-ANU </td>
          <td>
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
          <td>first_start_date</td>
          <td>date</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>Affair Phase Initial Start Date</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>fillable</td>
          <td></td>
          <td></td>
          <td>
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
          <td>sas_id</td>
          <td>character varying </td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>SAS : Project ID</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>sas_specific</td>
          <td>alten_projectbackofficeid</td>
          <td>ZSASP-PSPID </td>
          <td>
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
          <td>nbr_mission</td>
          <td>integer</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>Field computed by batch (1x/d 02h00)</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>computed</td>
          <td></td>
          <td></td>
          <td>
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
          <td>opportunity</td>
          <td>character varying </td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>SalesForce.Opportunity.Id</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>crm_specific</td>
          <td></td>
          <td></td>
          <td>
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
          <td>sub_type_internal_project</td>
          <td>character varying </td>
          <td>100</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>Transco : InternalProjectSubType</td>
          <td></td>
          <td>InternalProjectSubType</td>
          <td>false</td>
          <td>fillable</td>
          <td></td>
          <td>ZSASP-INTERNE</td>
          <td>
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
          <td>sub_type_service</td>
          <td>character varying </td>
          <td>100</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>Transco : ServiceSubType</td>
          <td></td>
          <td>ServiceSubType</td>
          <td>false</td>
          <td>fillable</td>
          <td></td>
          <td></td>
          <td>
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
          <td>customer_group_entity</td>
          <td>integer</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>
            MyBU : mission.site.id d'un site de type site.msi ou
            site.internal_project. Rempli uniquement quand le type de phase
            affaire est affair_phase.msi ou affair_phase.internal_project.
          </td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>fillable</td>
          <td></td>
          <td>ZSASP-KUNNR_FIN</td>
          <td>
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
          <td>cir</td>
          <td>boolean</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>fillable</td>
          <td></td>
          <td></td>
          <td>
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
          <td>linked_affair_phase</td>
          <td>integer</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>not_applicable</td>
          <td></td>
          <td></td>
          <td>
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
          <td>legacy_id</td>
          <td>character varying </td>
          <td>100</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>LEGACY ID</td>
          <td></td>
          <td></td>
          <td>true</td>
          <td>fillable</td>
          <td>Integration Key</td>
          <td>ZSASP-PSPID</td>
          <td>
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
          <td>migso</td>
          <td>boolean</td>
          <td></td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>not_applicable</td>
          <td></td>
          <td></td>
          <td>
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
          <td>customer_legal_entity</td>
          <td>character varying </td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>SalesForce.LegalEntity__c.Id (main org unit)</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>crm_specific</td>
          <td></td>
          <td></td>
          <td>
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
          <td>contact</td>
          <td>character varying </td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>SalesForce.Contact.Id</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>crm_specific</td>
          <td></td>
          <td></td>
          <td>
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
          <td>customer</td>
          <td>character varying </td>
          <td>50</td>
          <td>true</td>
          <td>false</td>
          <td></td>
          <td>SalesForce.Account.Id</td>
          <td></td>
          <td></td>
          <td>false</td>
          <td>crm_specific</td>
          <td></td>
          <td></td>
          <td>
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
    </table>
  );
}
