$md5s = Get-ChildItem -Recurse -Name -Filter "*drawn*by*" |
		Select-String -All -Pattern "[0-9a-f]{32}" |
		ForEach { $_.Matches.Value }

Set-Clipboard -Value "$md5s"

Add-Type -AssemblyName PresentationCore,PresentationFramework
$msgBody = "md5s saved to clipboard!"
[System.Windows.MessageBox]::Show($msgBody)
