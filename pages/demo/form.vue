<template>
	<doc-page>
		<sar-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
			<sar-form-item label="Activity name" name="name">
				<sar-input inlaid v-model="ruleForm.name" placeholder="Activity name" />
			</sar-form-item>
			<sar-form-item label="Activity zone" name="region">
				<sar-picker-input v-model="ruleForm.region" placeholder="Activity zone" :columns="dropdowns.ActivityZone" />
			</sar-form-item>
			<sar-form-item label="Activity count" name="count">
				<sar-picker-input v-model="ruleForm.count" placeholder="Activity count" :columns="dropdowns.ActivityCount" />
			</sar-form-item>
			<sar-form-item label="Activity time" required name="date1">
				<sar-datetime-picker-input v-model="ruleForm.date1" type="yMd" placeholder="Pick a date" />
			</sar-form-item>
			<sar-form-item label="" :show-star="false" name="date2">
				<sar-datetime-picker-input v-model="ruleForm.date2" type="hms" placeholder="Pick a time" />
			</sar-form-item>
			<sar-form-item label="Instant delivery" name="delivery">
				<sar-switch v-model="ruleForm.delivery" />
			</sar-form-item>
			<sar-form-item label="Activity type" name="type">
				<sar-checkbox-group v-model="ruleForm.type">
					<sar-checkbox value="Online activities" label="Online activities" />
					<sar-checkbox value="Promotion activities" label="Promotion activities" />
					<sar-checkbox value="Offline activities" label="Offline activities" />
					<sar-checkbox value="Simple brand exposure" label="Simple brand exposure" />
				</sar-checkbox-group>
			</sar-form-item>
			<sar-form-item label="Resources" name="resource">
				<sar-radio-group v-model="ruleForm.resource">
					<sar-radio label="Sponsorship" value="Sponsorship" />
					<sar-radio label="Venue" value="Venue" />
				</sar-radio-group>
			</sar-form-item>
			<sar-form-item label="Activity form" name="desc">
				<sar-input v-model="ruleForm.desc" type="textarea" />
			</sar-form-item>
			<sar-form-item>
				<sar-button @click="submitForm">Create</sar-button>
				<sar-button type="outline" @click="resetForm" root-style="margin-top: 20rpx">
					Reset
				</sar-button>
			</sar-form-item>
		</sar-form>
	</doc-page>
</template>

<script setup>
	import {
		toast
	} from 'sard-uniapp'



	// 选择的数据
	const dropdowns = {
		ActivityZone: [{
				label: 'Zone one',
				value: 'shanghai'
			},
			{
				label: 'Zone two',
				value: 'beijing'
			},
		],
		ActivityCount: [{
				value: "1",
				label: "第一",
			},
			{
				value: "2",
				label: "第二",
			}
		]
	}

	// 表单变量
	const {
		ruleForm
	} = toRefs(reactive({
		ruleForm: {
			name: 'Hello',
			region: '',
			count: '',
			date1: undefined,
			date2: undefined,
			delivery: false,
			type: [],
			resource: '',
			desc: '',
		}

	}))

	// 校验规则
	const rules = {
		name: [{
				required: true,
				message: 'Please input Activity name',
				trigger: 'blur'
			},
			{
				min: 3,
				max: 5,
				message: 'Length should be 3 to 5',
				trigger: 'blur'
			},
		],
		region: [{
			required: true,
			message: 'Please select Activity zone',
			trigger: 'change',
		}, ],
		count: [{
			required: true,
			message: 'Please select Activity count',
			trigger: 'change',
		}, ],
		date1: [{
			type: 'date',
			required: true,
			message: 'Please pick a date',
			trigger: 'change',
		}, ],
		date2: [{
			type: 'date',
			required: true,
			message: 'Please pick a time',
			trigger: 'change',
		}, ],
		type: [{
			type: 'array',
			required: true,
			message: 'Please select at least one activity type',
			trigger: 'change',
		}, ],
		resource: [{
			required: true,
			message: 'Please select activity resource',
			trigger: 'change',
		}, ],
		desc: [{
			required: true,
			message: 'Please input activity form',
			trigger: 'blur'
		}],
	}

	// form dom
	const ruleFormRef = ref(null)
	// 提交表单
	const submitForm = () => {
		if (!ruleFormRef.value) {
			return
		}
		ruleFormRef.value.validate().then(() => {
			toast('Success!')
			console.log(ruleForm.value);
		}).catch((error) => {
			console.log('error submit!', error)
		})
	}
	// 重置表单
	const resetForm = () => {
		if (!ruleFormRef.value) return
		ruleFormRef.value.reset()
	}
</script>

<style>
</style>