using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(S_CloudWeb.Startup))]
namespace S_CloudWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
