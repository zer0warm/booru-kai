$md5s = Get-ChildItem -Name -Filter "*drawn*by*" |
		Select-String -All -Pattern "[0-9a-f]{32}" |
		ForEach { $_.Matches.Value }
Set-Clipboard -Value "$md5s"
