
# 28.  Find the Index of the First Occurrence in a String

🟢 Easy &nbsp;&nbsp;&nbsp; ⚙️ Java &nbsp;&nbsp;&nbsp; ⏱ 0 ms &nbsp;&nbsp;&nbsp; 💾 42.7 MB



`Two Pointers`&nbsp;&nbsp;&nbsp;`String`&nbsp;&nbsp;&nbsp;`String Matching`&nbsp;&nbsp;&nbsp;`Z Algorithm`&nbsp;&nbsp;&nbsp;`Knuth–Morris–Pratt Algorithm`&nbsp;&nbsp;&nbsp;`Boyer–Moore String-Search Algorithm`


## Overview

<div align="center">
<table>
<tr>

<td valign="top">

<h3> Problem</h3>

|Property            |Value        |
|--------------------|-------------|
|Problem ID          |**28**|
|Difficulty          |**Easy**|
|Leetcode Link       |[link!](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

</td>

<td valign="top">
<h3> Community Stats</h3>


| Metric          | Count                         |
|-----------------|------------------------------:|
|Acceptance Rate  |**47.5%**          |
|Total Submission |**9.4M** |
|Total Accepted   |**4.4M**   |



</td>


</tr>
</table>
</div>


## Question
<p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> haystack = &quot;sadbutsad&quot;, needle = &quot;sad&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> &quot;sad&quot; occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> haystack = &quot;leetcode&quot;, needle = &quot;leeto&quot;
<strong>Output:</strong> -1
<strong>Explanation:</strong> &quot;leeto&quot; did not occur in &quot;leetcode&quot;, so we return -1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
	<li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>
</ul>


<br>
<p align="right">Last Sync: 2026-10-31 &nbsp;</p>
