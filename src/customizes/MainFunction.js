export function makeRandomId(intLength, strCharSet)
{
  strCharSet = strCharSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  intLength = parseInt(intLength)
  if (typeof intLength !== 'number' || isNaN(intLength))
  {
    intLength = 60
  }
  let strTextRandom = ''
  for (let i = 0; i < intLength; i++)
  {
    let intTempPosition = Math.floor(Math.random() * strCharSet.length)
    strTextRandom += strCharSet.substring(intTempPosition, intTempPosition + 1)
  }
  return strTextRandom
}

export function getEnvironment()
{
  if (typeof localStorage.getItem('env') == null)
  {
    let EncryptKey = makeRandomId(3)
    localStorage.setItem('env', EncryptKey)
  }
  return localStorage.getItem('env')
}

export function getStorage(strKey)
{
  return localStorage.getItem(strKey)
}

export function setStorage(strKey, anyValue)
{
  if (typeof anyValue != 'string')
  {
    anyValue = JSON.stringify(anyValue)
  }
  localStorage.setItem(strKey, anyValue)
}
