(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{530:function(s,n,t){"use strict";t.r(n);var a=t(4),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"leetcode-第一题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-第一题"}},[s._v("#")]),s._v(" Leetcode 第一题")]),s._v(" "),t("p",[s._v("第一次先用python3写。过几天可能作为rust练习用rust写。")]),s._v(" "),t("h2",{attrs:{id:"第一版两次双层循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一版两次双层循环"}},[s._v("#")]),s._v(" 第一版两次双层循环")]),s._v(" "),t("div",{staticClass:"language-python3 line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        for i in range(len(nums) - 1):\n            for j in range(i+1, len(nums)):\n                if nums[i] + nums[j] == target:\n                    return [i, j]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"第二版dictionary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二版dictionary"}},[s._v("#")]),s._v(" 第二版dictionary")]),s._v(" "),t("div",{staticClass:"language-python3 line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        dic = {}\n        for i in range(len(nums)):\n            if target - nums[i] in dic:\n                return[dic[target - nums[i]], i]\n            dic[nums[i]] = i\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("这个就是O(n)的复杂度了，用hash加速实在没有意思。")])])}),[],!1,null,null,null);n.default=e.exports}}]);