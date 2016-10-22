export default (str) => {
  if (null == str) return str
  
  return str.split('\n').shift().toLowerCase().replace(/\s/g, '-')
}
