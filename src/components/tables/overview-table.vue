<template>
  <div class="bg-base-100">
    <v-data-table
      dense
      hide-default-footer
      hide-default-header
      class="elevation-0 cus-table rounded-lg"
      :mobile-breakpoint="-1"
      :items-per-page="-1"
      :headers="headers"
      :items="rows"
    >
      <template v-slot:[`header`]="{ props: { headers } }">
        <thead>
          <tr class="accent">
            <th v-for="(h, i) in headers" :class="h.classHeader" :key="i">
              <span class="text-body-2 font-weight-bold text--text" v-if="i == 0">{{ h.text }}</span>
              <span class="text-body-2 text--text" v-else-if="i == 1">{{ h.text }} ({{ endingDate }})</span>
              <span class="text-body-2 text--text" v-else-if="i == 2">{{ h.text }} ({{ startingDate }})</span>
              <span class="text-body-2 text--text" v-else>{{ h.text }} </span>
              <!-- <div v-else>
                <span class="text-body-2 text--text">
                  {{ h.text }} <span v-if="i == 2">({{ startingDate }})</span>
                  {{ h.text }} <span v-if="i == 1">({{ endingDate }})</span>
                </span>
              </div> -->
            </th>
          </tr>
        </thead>
      </template>
      <template v-slot:[`item.statistic`]="{ item }">
        <p class="mb-0 pl-4 py-2 text-body-2 text--text">
          {{ item.statistic }} <span><tooltip :text="item.tooltip" /></span>
        </p>
      </template>
      <template v-slot:[`item.current`]="{ item }">
        <p class="mb-0 pl-4 py-2 text-body-2" v-if="item.type === 'percentage'">{{ (item.current / 100) | percent(2) }}</p>
        <p class="mb-0 pl-4 py-2 text-body-2" v-else-if="item.type === 'cash'">{{ item.current | currency('$') }}</p>
        <p class="mb-0 pl-4 py-2 text-body-2" v-else>{{ item.current | currency('', 2) }}</p>
      </template>
      <template v-slot:[`item.past`]="{ item }">
        <p class="mb-0 pl-4 py-2 text-body-2" v-if="item.type === 'percentage'">{{ (item.past / 100) | percent(2) }}</p>
        <p class="mb-0 pl-4 py-2 text-body-2" v-else-if="item.type === 'cash'">{{ item.past | currency('$') }}</p>
        <p class="mb-0 pl-4 py-2 text-body-2" v-else>{{ item.past | currency('', 2) }}</p>
      </template>
      <template v-slot:[`item.diff`]="{ item }">
        <p v-if="!item.colorOpposite" class="mb-0 pl-4 py-2 text-body-2" :class="item.diff > -0.001 ? 'info--text' : 'error--text'">
          {{ (item.diff / 100) | percent(2) }}
        </p>
        <p v-else class="mb-0 pl-4 py-2 text-body-2" :class="item.diff > -0.001 ? 'error--text' : 'info--text'">
          {{ (item.diff / 100) | percent(2) }}
        </p>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners';

import TableTextField from '../../inputs/table-text-field.vue';
import ComponentHeader from '../../headers/component-header.vue';
import TableTextFieldNumber from '~/components/inputs/table-text-field-number.vue';
import Tooltip from '~/components/tooltips/tooltip.vue';

export default {
  components: { TableTextField, LoopingRhombusesSpinner, ComponentHeader, TableTextFieldNumber, Tooltip },
  name: 'OverviewTable',
  props: {
    statistics: {
      type: [Object, Array],
      required: false,
    },
    startingDate: {
      type: String,
      required: false,
    },
    endingDate: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    headers: [
      { text: 'Statistic', sortable: false, value: 'statistic', classHeader: '' },
      { text: 'Value', sortable: false, value: 'current', classHeader: 'text--secondary' },
      { text: `Value `, sortable: false, value: 'past', classHeader: 'text--secondary' },
      { text: 'Difference', sortable: false, value: 'diff', classHeader: 'text--secondary' },
    ],
    rows: [
      {
        statistic: 'Asset value',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'The value of the properties',
        colorOpposite: false,
      },
      {
        statistic: 'Cash on cash',
        current: 0,
        past: 0,
        diff: 0,
        type: 'percentage',
        tooltip: 'The cash flow divided by the equity invested',
        colorOpposite: false,
      },
      {
        statistic: 'Debt',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'How much you owe the bank',
        colorOpposite: true,
      },
      {
        statistic: 'DSCR',
        current: 0,
        past: 0,
        diff: 0,
        type: '',
        tooltip: 'For every $1 of mortage payments, how many dollars of NOI you have',
        colorOpposite: false,
      },
      {
        statistic: 'Equity',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'How much equity you have in the property',
        colorOpposite: false,
      },
      {
        statistic: 'Equity gain',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'How much equity you have made in the last 12 months ',
        colorOpposite: false,
      },
      {
        statistic: 'Equity invested',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'How much money you put into this deal',
        colorOpposite: false,
      },
      {
        statistic: 'IRR',
        current: 0,
        past: 0,
        diff: 0,
        type: 'percentage',
        tooltip: "If you were to sell the property today, what would the investment's IRR be",

        colorOpposite: false,
      },
      {
        statistic: 'LTV',
        current: 0,
        past: 0,
        diff: 0,
        type: 'percentage',
        tooltip: 'Your current Loan To Value',
        colorOpposite: true,
      },

      {
        statistic: 'Monthly income',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'The monthly average income produced over the prior 12 months. Pulled from your "Monthly Financials" ',
        colorOpposite: false,
      },
      {
        statistic: 'Monthly expenses',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'The monthly average expenses paid over the prior 12 months. Pulled from your "Monthly Financials" ',
        colorOpposite: true,
      },
      {
        statistic: 'Monthly NOI',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'The monthly average Net Operating Income produced over the prior 12 months. Pulled from your "Monthly Financials" ',
        colorOpposite: false,
      },
      {
        statistic: 'Monthly debt service',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'The monthly average debt service paid over the prior 12 months. Pulled from your "Monthly Financials" ',
        colorOpposite: true,
      },
      {
        statistic: 'Monthly cashflow',
        current: 0,
        past: 0,
        diff: 0,
        type: 'cash',
        tooltip: 'The monthly average cash flow produced over the prior 12 months. Pulled from your "Monthly Financials" ',
        colorOpposite: false,
      },
      {
        statistic: 'ROE',
        current: 0,
        past: 0,
        diff: 0,
        type: 'percentage',
        tooltip: 'The monthly Cash Flow Number (from above) divided by your equity',
        colorOpposite: false,
      },
    ],
    default: { description: '', amount: null },
  }),
  watch: {
    statistics: function (newData) {
      this.setRecords(newData);
    },
  },
  methods: {
    setRecords(data) {
      if (data) {
        this.rows[0].current = data.asset_value.current || 0;
        this.rows[0].diff = data.asset_value.diff || 0;
        this.rows[0].past = data.asset_value.past || 0;

        this.rows[1].current = data.cash_on_cash.current || 0;
        this.rows[1].diff = data.cash_on_cash.diff || 0;
        this.rows[1].past = data.cash_on_cash.past || 0;

        this.rows[2].current = data.debt.current || 0;
        this.rows[2].diff = data.debt.diff || 0;
        this.rows[2].past = data.debt.past || 0;

        this.rows[3].current = data.dscr.current || 0;
        this.rows[3].diff = data.dscr.diff || 0;
        this.rows[3].past = data.dscr.past || 0;

        this.rows[4].current = data.equity.current || 0;
        this.rows[4].diff = data.equity.diff || 0;
        this.rows[4].past = data.equity.past || 0;

        this.rows[5].current = data.equity_gain.current || 0;
        this.rows[5].diff = data.equity_gain.diff || 0;
        this.rows[5].past = data.equity_gain.past || 0;

        this.rows[6].current = data.equity_invested.current || 0;
        this.rows[6].diff = data.equity_invested.diff || 0;
        this.rows[6].past = data.equity_invested.past || 0;

        this.rows[7].current = data.irr.current || 0;
        this.rows[7].diff = data.irr.diff || 0;
        this.rows[7].past = data.irr.past || 0;

        this.rows[8].current = data.ltv.current || 0;
        this.rows[8].diff = data.ltv.diff || 0;
        this.rows[8].past = data.ltv.past || 0;

        this.rows[9].current = data.income.current || 0;
        this.rows[9].diff = data.income.diff || 0;
        this.rows[9].past = data.income.past || 0;

        this.rows[10].current = data.expenses.current || 0;
        this.rows[10].diff = data.expenses.diff || 0;
        this.rows[10].past = data.expenses.past || 0;

        this.rows[11].current = data.noi.current || 0;
        this.rows[11].diff = data.noi.diff || 0;
        this.rows[11].past = data.noi.past || 0;

        this.rows[12].current = data.monthly_debt.current || 0;
        this.rows[12].diff = data.monthly_debt.diff || 0;
        this.rows[12].past = data.monthly_debt.past || 0;

        this.rows[13].current = data.cashflow.current || 0;
        this.rows[13].diff = data.cashflow.diff || 0;
        this.rows[13].past = data.cashflow.past || 0;

        this.rows[14].current = data.roe.current || 0;
        this.rows[14].diff = data.roe.diff || 0;
        this.rows[14].past = data.roe.past || 0;
      }
    },
  },
};
</script>

<style>
        /* this.rows[9].current = data.cashflow.current || 0;
        this.rows[9].diff = data.cashflow.diff || 0;
        this.rows[9].past = data.cashflow.past || 0;

        this.rows[10].current = data.monthly_debt.current || 0;
        this.rows[10].diff = data.monthly_debt.diff || 0;
        this.rows[10].past = data.monthly_debt.past || 0;

        this.rows[11].current = data.income.current || 0;
        this.rows[11].diff = data.income.diff || 0;
        this.rows[11].past = data.income.past || 0;

        this.rows[12].current = data.expenses.current || 0;
        this.rows[12].diff = data.expenses.diff || 0;
        this.rows[12].past = data.expenses.past || 0;

        this.rows[13].current = data.noi.current || 0;
        this.rows[13].diff = data.noi.diff || 0;
        this.rows[13].past = data.noi.past || 0; */


</style>

